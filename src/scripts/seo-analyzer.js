#!/usr/bin/env node

import * as cheerio from "cheerio";
import fs from "fs";
import { glob } from "glob";

class SEOAnalyzer {
  constructor() {
    this.checks = [
      { name: "H1 Tag", test: this.checkH1Tags.bind(this) },
      { name: "Title Length", test: this.checkTitleLength.bind(this) },
      { name: "Word Count", test: this.checkWordCount.bind(this) },
      { name: "Meta Description", test: this.checkMetaDescription.bind(this) },
      { name: "Image Alt Text", test: this.checkImageAltText.bind(this) },
      { name: "H2 Structure", test: this.checkH2Structure.bind(this) },
      { name: "Duplicate H2s", test: this.checkDuplicateH2s.bind(this) },
      { name: "Open Graph", test: this.checkOpenGraph.bind(this) },
      { name: "Canonical URL", test: this.checkCanonicalURL.bind(this) },
    ];
  }

  // Check H1 tags
  checkH1Tags($) {
    const h1Count = $("h1").length;
    if (h1Count === 1) {
      return { status: "pass", message: `Found 1 H1 tag` };
    } else if (h1Count === 0) {
      return {
        status: "fail",
        message: `No H1 tag found. Should have exactly one H1 per page.`,
      };
    } else {
      return {
        status: "fail",
        message: `Multiple H1 tags found (${h1Count}). Should have only one H1 per page.`,
      };
    }
  }

  // Check title length
  checkTitleLength($) {
    const titleElement = $("title").first();
    const title = titleElement.length ? titleElement.text().trim() : "";

    if (title.length === 0) {
      return { status: "fail", message: `No <title> tag found` };
    } else if (title.length >= 30 && title.length <= 60) {
      return {
        status: "pass",
        message: `Title length is optimal (${title.length} chars)`,
      };
    } else if (title.length < 30) {
      return {
        status: "fail",
        message: `Title too short (${title.length} chars). Should be 30-60 characters.`,
      };
    } else {
      return {
        status: "fail",
        message: `Title too long (${title.length} chars). Should be 30-60 characters.`,
      };
    }
  }

  // Check word count
  checkWordCount($) {
    const textContent = $.text();
    const wordCount = textContent
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    if (wordCount >= 300) {
      return {
        status: "pass",
        message: `Word count is good (${wordCount} words)`,
      };
    } else {
      return {
        status: "fail",
        message: `Word count too low (${wordCount} words). Should be at least 300 words.`,
      };
    }
  }

  // Check meta description
  checkMetaDescription($) {
    const metaDescription = $('meta[name="description"]').attr("content") || "";

    if (metaDescription.length === 0) {
      return { status: "fail", message: `No meta description found` };
    } else if (metaDescription.length >= 120 && metaDescription.length <= 155) {
      return {
        status: "pass",
        message: `Meta description length is optimal (${metaDescription.length} chars)`,
      };
    } else if (metaDescription.length < 120) {
      return {
        status: "fail",
        message: `Meta description too short (${metaDescription.length} chars). Should be 120-155 characters.`,
      };
    } else {
      return {
        status: "fail",
        message: `Meta description too long (${metaDescription.length} chars). Should be 120-155 characters.`,
      };
    }
  }

  // Check image alt text
  checkImageAltText($) {
    const images = $("img");
    const issues = [];
    let totalImages = images.length;
    let imagesWithAlt = 0;

    if (totalImages === 0) {
      return { status: "info", message: `No images found on page` };
    }

    images.each(function () {
      const alt = $(this).attr("alt") || "";
      const src = $(this).attr("src") || "unknown source";

      if (alt.length === 0) {
        issues.push(`Missing alt text: ${src}`);
      } else if (alt.length > 100) {
        issues.push(`Alt text too long (${alt.length} chars): ${src}`);
      } else {
        imagesWithAlt++;
      }
    });

    if (issues.length === 0) {
      return {
        status: "pass",
        message: `All ${totalImages} images have proper alt text`,
      };
    } else {
      return {
        status: "fail",
        message: `${issues.length} image(s) with issues: ${issues.join("; ")}`,
      };
    }
  }

  // Check H2 structure
  checkH2Structure($) {
    const h2Count = $("h2").length;

    if (h2Count >= 1) {
      return {
        status: "pass",
        message: `Found ${h2Count} H2 tag(s) for good content structure`,
      };
    } else {
      return {
        status: "fail",
        message: `No H2 tags found. Should have at least one H2 for better content structure.`,
      };
    }
  }

  // Check duplicate H2s
  checkDuplicateH2s($) {
    const h2Texts = [];
    const duplicateH2s = [];

    $("h2").each(function () {
      const h2Text = $(this).text().trim().toLowerCase();
      if (h2Texts.includes(h2Text)) {
        if (!duplicateH2s.includes(h2Text)) {
          duplicateH2s.push(h2Text);
        }
      } else {
        h2Texts.push(h2Text);
      }
    });

    if (duplicateH2s.length === 0) {
      return { status: "pass", message: `No duplicate H2 tags found` };
    } else {
      return {
        status: "fail",
        message: `Duplicate H2 tags found: "${duplicateH2s.join('", "')}"`,
      };
    }
  }

  // Check Open Graph tags
  checkOpenGraph($) {
    const ogTitle = $('meta[property="og:title"]').attr("content") || "";
    const ogDescription =
      $('meta[property="og:description"]').attr("content") || "";
    const ogImage = $('meta[property="og:image"]').attr("content") || "";

    const missing = [];
    if (!ogTitle) missing.push("og:title");
    if (!ogDescription) missing.push("og:description");
    if (!ogImage) missing.push("og:image");

    if (missing.length === 0) {
      return {
        status: "pass",
        message: `All essential Open Graph tags present`,
      };
    } else {
      return {
        status: "fail",
        message: `Missing Open Graph tags: ${missing.join(", ")}`,
      };
    }
  }

  // Check canonical URL
  checkCanonicalURL($) {
    const canonical = $('link[rel="canonical"]').attr("href") || "";

    if (canonical.length > 0) {
      return { status: "pass", message: `Canonical URL found: ${canonical}` };
    } else {
      return { status: "fail", message: `No canonical URL found` };
    }
  }

  // Analyze single HTML file
  analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const $ = cheerio.load(content);

      const results = {
        file: filePath,
        checks: [],
        summary: { passed: 0, failed: 0, info: 0 },
      };

      this.checks.forEach((check) => {
        const result = check.test($);
        results.checks.push({
          name: check.name,
          status: result.status,
          message: result.message,
        });

        results.summary[
          result.status === "pass"
            ? "passed"
            : result.status === "fail"
            ? "failed"
            : "info"
        ]++;
      });

      return results;
    } catch (error) {
      return {
        file: filePath,
        error: error.message,
        checks: [],
        summary: { passed: 0, failed: 0, info: 0 },
      };
    }
  }

  // Analyze all HTML files in directory
  async analyzeDirectory(directory = "_site") {
    try {
      const htmlFiles = await glob(`${directory}/**/*.html`, {
        ignore: [
          `${directory}/index.html`,
          `${directory}/tags/**`,
          `${directory}/category/**`,
          `${directory}/author/**`,
          `${directory}/sitemap.*`,
          `${directory}/robots.*`,
          `${directory}/404.*`,
        ],
      });

      if (htmlFiles.length === 0) {
        console.log(`No HTML files found in ${directory}`);
        return;
      }

      const allResults = htmlFiles.map((file) => this.analyzeFile(file));
      this.displayResults(allResults);

      return allResults;
    } catch (error) {
      console.error("Error analyzing directory:", error.message);
    }
  }

  // Display results
  displayResults(results) {
    console.log("\n🔍 SEO ANALYSIS REPORT");
    console.log("=".repeat(80));

    let totalPassed = 0;
    let totalFailed = 0;
    let totalInfo = 0;

    results.forEach((result) => {
      if (result.error) {
        console.log(`\n❌ Error analyzing ${result.file}: ${result.error}`);
        return;
      }

      console.log(`\n📄 ${result.file}`);
      console.log("-".repeat(60));

      result.checks.forEach((check) => {
        const icon =
          check.status === "pass"
            ? "✅"
            : check.status === "fail"
            ? "❌"
            : "ℹ️";
        console.log(`   ${icon} ${check.name}: ${check.message}`);
      });

      console.log(
        `\n   📊 Summary: ${result.summary.passed} passed, ${result.summary.failed} failed, ${result.summary.info} info`
      );

      totalPassed += result.summary.passed;
      totalFailed += result.summary.failed;
      totalInfo += result.summary.info;
    });

    console.log("\n" + "=".repeat(80));
    console.log(`\n📈 OVERALL SUMMARY:`);
    console.log(`   Files analyzed: ${results.filter((r) => !r.error).length}`);
    console.log(`   Total checks: ${totalPassed + totalFailed + totalInfo}`);
    console.log(`   ✅ Passed: ${totalPassed}`);
    console.log(`   ❌ Failed: ${totalFailed}`);
    console.log(`   ℹ️  Info: ${totalInfo}`);
  }
}

// CLI usage
const args = process.argv.slice(2);
const directory = args[0] || "_site";

const analyzer = new SEOAnalyzer();
analyzer.analyzeDirectory(directory);

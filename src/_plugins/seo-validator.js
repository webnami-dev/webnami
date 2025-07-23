const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
  // warnings
  let allWarnings = [];

  // Adding a transform to validate content after processing
  eleventyConfig.addTransform("seoValidator", function (content, outputPath) {
    // Only process HTML files (transformed markdown)
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }

    // Skip if this is not from a markdown source
    if (!this.inputPath || !this.inputPath.endsWith(".md")) {
      return content;
    }

    const pageData = this.page || {};

    const warnings = validateContent(content, this.inputPath, pageData);

    if (warnings.length > 0) {
      allWarnings.push({
        file: this.inputPath,
        warnings: warnings,
      });
    }

    return content;
  });

  // Adding event listener to display warnings after build
  eleventyConfig.on("eleventy.after", function () {
    displayWarnings(allWarnings);
    allWarnings = []; // reset for next build
  });
};

// Validation function
function validateContent(htmlContent, inputPath, pageData) {
  const warnings = [];

  // Parsing HTML content for analysis
  const $ = cheerio.load(htmlContent);

  // 1. Checking for multiple H1 tags
  const h1Count = $("h1").length;
  if (h1Count > 1) {
    warnings.push(
      `❌ Multiple H1 tags found (${h1Count}). Should have only one H1 per page.`
    );
  } else if (h1Count === 0) {
    warnings.push(`⚠️  No H1 tag found. Consider adding one for better SEO.`);
  }

  // 2. Checking title length (30-60 characters) - from <title> tag
  const titleElement = $("title").first();
  const title = titleElement.length ? titleElement.text().trim() : "";
  if (title.length === 0) {
    warnings.push(
      `❌ No <title> tag found. Please add a title tag in your HTML.`
    );
  } else if (title.length < 30) {
    warnings.push(
      `❌ Title too short (${title.length} chars). Should be 30-60 characters.`
    );
  } else if (title.length > 60) {
    warnings.push(
      `❌ Title too long (${title.length} chars). Should be 30-60 characters.`
    );
  }

  // 3. Checking word count (minimum 300 words)
  const textContent = $.text();
  const wordCount = textContent
    .split(/\s+/)

    .filter((word) => word.length > 0).length;
  if (wordCount < 300) {
    warnings.push(
      `❌ Word count too low (${wordCount} words). Should be at least 300 words.`
    );
  }

  // 4. Checking description length (120-155 characters) - from meta description
  const metaDescription = $('meta[name="description"]').attr("content") || "";
  if (metaDescription.length === 0) {
    warnings.push(
      `❌ No meta description found. Please add <meta name="description" content="..."> tag.`
    );
  } else if (metaDescription.length < 120) {
    warnings.push(
      `❌ Meta description too short (${metaDescription.length} chars). Should be 120-155 characters.`
    );
  } else if (metaDescription.length > 155) {
    warnings.push(
      `❌ Meta description too long (${metaDescription.length} chars). Should be 120-155 characters.`
    );
  }

  // 5. Checking alt text length (should be below 100 characters)
  $("img").each(function () {
    const alt = $(this).attr("alt") || "";
    if (alt.length === 0) {
      warnings.push(
        `❌ Image missing alt text: ${$(this).attr("src") || "unknown source"}`
      );
    } else if (alt.length > 100) {
      warnings.push(
        `❌ Alt text too long (${alt.length} chars) for image: ${
          $(this).attr("src") || "unknown source"
        }. Should be under 100 characters.`
      );
    }
  });

  // 6. Checking for at least one H2 tag
  const h2Count = $("h2").length;
  if (h2Count === 0) {
    warnings.push(
      `❌ No H2 tags found. Should have at least one H2 for better content structure.`
    );
  }

  // 7. Checking for duplicate H2 tags
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

  if (duplicateH2s.length > 0) {
    warnings.push(`❌ Duplicate H2 tags found: "${duplicateH2s.join('", "')}"`);
  }

  return warnings;
}

// Function to display warnings in the console
function displayWarnings(allWarnings) {
  if (allWarnings.length === 0) {
    console.log("✅ All content SEO validation checks passed!");
    return;
  }

  console.log("\n🔍 CONTENT SEO VALIDATION WARNINGS:\n");
  console.log("=".repeat(60));

  allWarnings.forEach((fileWarning) => {
    console.log(`\n📄 File: ${fileWarning.file}`);
    console.log("-".repeat(40));
    fileWarning.warnings.forEach((warning) => {
      console.log(`   ${warning}`);
    });
  });

  console.log("\n" + "=".repeat(60));
  console.log(`\n⚠️  Total files with issues: ${allWarnings.length}`);
  console.log(
    `⚠️  Total warnings: ${allWarnings.reduce(
      (sum, fw) => sum + fw.warnings.length,
      0
    )}\n`
  );
}

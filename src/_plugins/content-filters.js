import * as cheerio from "cheerio";
import slugify from "slugify";
import { readFileSync } from "fs";

const config = JSON.parse(readFileSync("src/_data/config.json", "utf-8"));

export default function (eleventyConfig) {
  // Single filter that parses content once and returns both excerpt and preview image.
  // Usage in templates:
  //   {% set meta = post.templateContent | postMeta %}
  //   {{ meta.excerpt }}
  //   {{ meta.image }}
  eleventyConfig.addFilter("postMeta", (content) => {
    const logo = config.site?.logo || "";
    const htmlContent = content?.templateContent || content || "";
    if (!htmlContent) return { excerpt: "", image: `/images/${logo}` };

    const $ = cheerio.load(htmlContent);

    // Extract preview image
    const image = $("img").first().attr("src") || `/images/${logo}`;

    // Extract excerpt
    const maxLength = 150;
    const excerptParagraphs = [];
    let currentLength = 0;
    let truncated = false;

    $("p").each((index, element) => {
      const text = $(element).text().trim();
      if (!text) return;

      if (currentLength + text.length > maxLength) {
        const remainingLength = maxLength - currentLength;
        if (remainingLength > 0) {
          let truncatedText = text.substring(0, remainingLength);
          if (remainingLength < text.length) {
            const lastSpaceIndex = truncatedText.lastIndexOf(" ");
            if (lastSpaceIndex > 0) {
              truncatedText = truncatedText.substring(0, lastSpaceIndex);
            }
          }
          excerptParagraphs.push(truncatedText);
          truncated = true;
        }
        return false;
      }

      excerptParagraphs.push(text);
      currentLength += text.length + 1;
    });

    let excerpt = excerptParagraphs.join(" ");
    if (truncated && !excerpt.endsWith(".")) {
      excerpt += "...";
    }
    excerpt = excerpt
      .replace(/\n/g, " ")
      .replace(/\r/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Anchor links - adds IDs and links to H2 headings.
    $("h2").each(function () {
      const heading = $(this);
      const text = heading.text();

      const slug = slugify(text, {
        lower: true,
        strict: true,
      });
      heading.attr("id", slug);
      heading.append(
        ` <a href="#${slug}" class="cursor-pointer" aria-hidden="false">#</a>`,
      );
    });

    const contentAnchorLinks = $.html();

    return { excerpt, image, contentAnchorLinks };
  });
}

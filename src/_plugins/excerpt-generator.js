const cheerio = require("cheerio");

class ExcerptGenerator {
  getExcerpt(content, options = {}) {
    if (!content || typeof content !== "string") {
      return "";
    }

    const {
      length = 100, // More reasonable default
      addEllipsis = true, // Add "..." when truncated
      preserveWords = true, // Don't cut words in half
    } = options;

    // Load the content with cheerio
    const $ = cheerio.load(content);

    let excerptParagraphs = [];
    let currentLength = 0;
    let truncated = false;

    // Find all paragraph elements
    $("p").each((index, element) => {
      const text = $(element).text().trim();

      // Skip empty paragraphs
      if (!text) return;

      // Check if adding this paragraph would exceed the limit
      if (currentLength + text.length > length) {
        const remainingLength = length - currentLength;

        if (remainingLength > 0) {
          let truncatedText = text.substring(0, remainingLength);

          // Preserve word boundaries
          if (preserveWords && remainingLength < text.length) {
            const lastSpaceIndex = truncatedText.lastIndexOf(" ");
            if (lastSpaceIndex > 0) {
              truncatedText = truncatedText.substring(0, lastSpaceIndex);
            }
          }

          excerptParagraphs.push(truncatedText);
          truncated = true;
        }

        return false; // Break out of the each loop
      }

      excerptParagraphs.push(text);
      currentLength += text.length + 1; // +1 for space between paragraphs
    });

    let result = excerptParagraphs.join(" ");

    // Add ellipsis if content was truncated
    if (truncated && addEllipsis && !result.endsWith(".")) {
      result += "...";
    }

    return result;
  }
}

// Eleventy plugin function
module.exports = function (eleventyConfig) {
  const excerptGenerator = new ExcerptGenerator();
  // Add as a filter
  eleventyConfig.addFilter("excerpt", function (content) {
    return excerptGenerator.getExcerpt(content);
  });
};

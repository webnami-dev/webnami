const cheerio = require("cheerio");

class ExcerptGenerator {
  getExcerpt(content) {
    if (!content || typeof content !== "string") {
      return "";
    }

    const length = 200;

    // Load the content with cheerio
    const $ = cheerio.load(content);

    let excerptParagraphs = [];
    let currentLength = 0;

    // Find all paragraph elements
    $("p").each((index, element) => {
      const text = $(element).text().trim();

      // Skip empty paragraphs
      if (!text) return;

      // If adding this paragraph would exceed the length limit, stop
      if (currentLength > 0 && currentLength + text.length > length) {
        return false; // Break out of the each loop
      }

      excerptParagraphs.push(text);
      currentLength += text.length;
    });

    return excerptParagraphs.join(" ");
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

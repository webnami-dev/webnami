import * as cheerio from "cheerio";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("previewImage", function (content, logo = "") {
    // Handle different content types
    const htmlContent = content?.templateContent || content || "";

    if (!htmlContent) return logo;

    const $ = cheerio.load(htmlContent);
    const src = $("img").first().attr("src");

    return src || logo;
  });
}

import * as cheerio from "cheerio";

class PreviewImage {
  getPreviewImage(content, logo) {
    const $ = cheerio.load(content.templateContent);
    const img = $("img").first();

    if (img.length > 0) {
      const src = img.attr("src");
      if (src) {
        return src;
      }
    }
    return logo;
  }
}

export default function (eleventyConfig) {
  const previewImage = new PreviewImage();
  // Add as a filter
  eleventyConfig.addFilter("previewImage", function (content, logo) {
    return previewImage.getPreviewImage(content, logo);
  });
}

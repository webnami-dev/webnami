import * as cheerio from "cheerio";
import slugify from "slugify";

function getAnchorLinks(content) {
  const $ = cheerio.load(content);

  $("h2").each(function () {
    const heading = $(this);
    const text = heading.text();

    const slug = slugify(text, {
      lower: true,
      strict: true,
    });
    heading.attr("id", slug);
    heading.append(
      ` <a href="#${slug}" class="cursor-pointer" aria-hidden="false">#</a>`
    );
  });
  return $.html();
}

// Eleventy plugin function
export default function (eleventyConfig) {
  // Add as a filter
  eleventyConfig.addFilter("anchorLinks", function (content) {
    return getAnchorLinks(content);
  });
}

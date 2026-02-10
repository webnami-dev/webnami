import slugify from "slugify";

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (
        !data.permalink &&
        (data.layout === "post" || data.layout === "page")
      ) {
        if (data.title === null || data.title === undefined) {
          throw new Error(
            `Invalid heading format in "${data.inputPath}": heading cannot be null or undefined. Expected format: heading: "Page Heading"`,
          );
        }
        return `/${slugify(data.title, { lower: true, strict: true })}/`;
      }
      return data.permalink;
    },
  });
}

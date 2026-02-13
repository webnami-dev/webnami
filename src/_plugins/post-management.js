export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (
        !data.permalink &&
        (data.layout === "post" || data.layout === "page")
      ) {
        return "/" + data.page.fileSlug + "/";
      }
      return data.permalink;
    },
  });
}

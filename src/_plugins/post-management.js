const todaysDate = new Date();
const slugify = require("slugify");

function showDraft(data) {
  const isDraft = "draft" in data && data.draft !== false;
  const isPostInFuture = "date" in data ? data.date > todaysDate : false;
  return !isDraft && !isPostInFuture;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (!data.permalink && data.layout === "layouts/post") {
        if (!showDraft(data)) {
          return false;
        }
        if (data.heading === null || data.heading === undefined) {
          throw new Error(
            `Invalid heading format in "${data.inputPath}": heading cannot be null or undefined. Expected format: heading: "Page Heading"`
          );
        }
        return `/${slugify(data.heading, { lower: true, strict: true })}/`;
      }
      return data.permalink;
    },
    eleventyExcludeFromCollections: (data) =>
      showDraft(data) ? data.eleventyExcludeFromCollections : true,
  });
};

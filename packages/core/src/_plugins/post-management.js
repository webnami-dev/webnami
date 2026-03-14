function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.isDraft) return false;
      if (data.layout === "post" || data.layout === "page") {
        if (!data.permalink) {
          return data.title ? `/${toSlug(data.title)}/` : false;
        }
      }
      return data.permalink;
    },
  });
}

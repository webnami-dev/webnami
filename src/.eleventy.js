import { readFileSync } from "fs";
import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { icons } from "lucide";
import { DateTime } from "luxon";
import htmlmin from "html-minifier-terser";

import postManagement from "./_plugins/post-management.js";
import contentFilters from "./_plugins/content-filters.js";

export default function (eleventyConfig) {
  const config = JSON.parse(readFileSync("src/_data/config.json", "utf-8"));
  const isProd = process.env.NODE_ENV === "production";
  eleventyConfig.ignores.add("*.md");
  eleventyConfig.ignores.add("*.njk");
  eleventyConfig.ignores.add("admin/**");
  eleventyConfig.ignores.add("themes/**");
  if (isProd) {
    eleventyConfig.ignores.add("api/**");
  }
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(postManagement);
  eleventyConfig.addPlugin(contentFilters);
  eleventyConfig.addGlobalData("config", config);
  eleventyConfig.addPassthroughCopy({ "./images": "images" });
  eleventyConfig.addPassthroughCopy({
    [`./themes/${config.theme}/assets/fonts`]: "assets/fonts",
  });
  // Add date filter for sitemap

  eleventyConfig.addFilter("postDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("date", (date, format) => {
    let d;
    if (date === "") {
      d = new Date();
    } else {
      d = new Date(date);
    }
    if (format === "YYYY-MM-DD") {
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(d.getDate()).padStart(2, "0")}`;
    }
    return d.toISOString();
  });
  eleventyConfig.addFilter("assetHash", (assetPath) => {
    const timestamp = Date.now();
    return `${assetPath}?v=${timestamp}`;
  });

  eleventyConfig.addFilter("slice", (array, start, end) => {
    return array.slice(start, end);
  });

  eleventyConfig.addFilter("imagePath", (filename) => {
    return `/images/${filename}`;
  });

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  if (isProd) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      outputDir: "./_site/images/",
      urlPath: "/images/",
      // output image formats
      formats: ["webp"],
      // output image widths
      widths: [360, 720, 1080],
      sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",

      // to disable dev server transform
      transformOnRequest: false,

      cacheOptions: {
        duration: "1d",
        directory: ".cache",
      },

      // optional, attributes assigned on <img> nodes override these values
      htmlOptions: {
        imgAttributes: {
          loading: "lazy",
          decoding: "async",
        },
        pictureAttributes: {},
      },

      sharpOptions: {
        animated: true,
        failOnError: false,
        withoutEnlargement: true,
      },
    });
  }

  eleventyConfig.addAsyncFilter("imageFilter", async (src) => {
    if (!src) return "";
    src = `.${src}`;

    if (isProd) {
      try {
        const metadata = await Image(src, {
          widths: [1080],
          formats: ["webp"],
          outputDir: "./_site/images/",
          urlPath: "/images/",
          // Force caching for all images
          cacheOptions: {
            duration: "1d",
            directory: ".cache",
          },
          sharpOptions: {
            animated: true,
            failOnError: false,
            withoutEnlargement: true,
          },
        });

        const format = metadata.webp || metadata.jpeg;
        if (format && format.length > 0) {
          const optimizedUrl = format[format.length - 1].url;
          return optimizedUrl;
        }

        throw new Error("No suitable format found");
      } catch (error) {
        console.error("Error optimizing image:", error);
        return src;
      }
    }
    return src;
  });

  eleventyConfig.addShortcode("icon", (iconName, className = "w-5 h-5") => {
    // Convert kebab-case to PascalCase
    const pascalCaseIconName = iconName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    const iconData = icons[pascalCaseIconName];
    if (!iconData) {
      console.log(`Icon '${pascalCaseIconName}' not found`);
      return "";
    }
    if (!Array.isArray(iconData)) {
      return `<!-- Invalid icon data -->`;
    }
    const svgElements = iconData
      .map((element) => {
        const [tagName, attributes] = element;
        // Convert attributes object to attribute string
        const attributeString = Object.entries(attributes)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");

        return `<${tagName} ${attributeString}/>`;
      })
      .join("");
    return `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgElements}</svg>`;
  });

  // Build all collections in a single pass over collectionsApi.getAll()
  let collectionsCache = null;

  function buildCollections(collectionsApi) {
    //if (collectionsCache) return collectionsCache;

    const allItems = collectionsApi.getAllSorted().reverse();
    const { postsPerPage } = config;

    const posts = [];
    const pages = [];
    const tagPosts = new Map();
    const authorPosts = new Map();
    const categoryPosts = new Map();
    const categorySet = new Set();

    for (const item of allItems) {
      const { layout } = item.data;

      // Classify posts and pages
      if (layout === "post" || layout === "post.njk") {
        posts.push(item);
      } else if (layout === "page" || layout === "page.njk") {
        pages.push(item);
      }

      // Collect tags
      if ("tags" in item.data) {
        let itemTags = item.data.tags;
        if (typeof itemTags === "string") itemTags = [itemTags];
        for (const tag of itemTags) {
          if (tag === "all" || tag === "nav" || tag === "post") continue;
          if (!tagPosts.has(tag)) tagPosts.set(tag, []);
          tagPosts.get(tag).push(item);
        }
      }

      // Collect authors
      if ("author" in item.data) {
        let itemAuthors = item.data.author;
        if (typeof itemAuthors === "string") itemAuthors = [itemAuthors];
        for (const author of itemAuthors) {
          if (!authorPosts.has(author)) authorPosts.set(author, []);
          authorPosts.get(author).push(item);
        }
      }

      // Collect and validate categories
      if ("category" in item.data && item.data.category) {
        const { category } = item.data;

        if (typeof category !== "string") {
          throw new Error(
            `Invalid category format in "${item.inputPath}": category must be a string. Found: ${typeof category}. Expected format: category: "CategoryName"`,
          );
        }

        if (category.trim() === "") {
          throw new Error(
            `Invalid category format in "${item.inputPath}": category cannot be empty. Expected format: category: "CategoryName"`,
          );
        }

        if (Array.isArray(category)) {
          throw new Error(
            `Invalid category format in "${item.inputPath}": category cannot be an array. Use tags for multiple values. Expected format: category: "CategoryName"`,
          );
        }

        categorySet.add(category);
        if (!categoryPosts.has(category)) categoryPosts.set(category, []);
        categoryPosts.get(category).push(item);
      }
    }

    // Helper to paginate a sorted list of posts
    function paginate(sortedItems, name) {
      const result = [];
      const totalPages = Math.ceil(sortedItems.length / postsPerPage);
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        result.push({
          name,
          page: pageNumber,
          total: sortedItems.length,
          items: sortedItems.slice(startIndex, startIndex + postsPerPage),
        });
      }
      return result;
    }

    // Build paginated posts
    const paginatedPosts = [];
    const totalPages = Math.ceil(posts.length / postsPerPage);
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const startIndex = (pageNumber - 1) * postsPerPage;
      paginatedPosts.push({
        page: pageNumber,
        total: posts.length,
        items: posts.slice(startIndex, startIndex + postsPerPage),
        postsPerPage,
      });
    }

    // Build tag pages
    const tagPages = [];
    for (const [tagName, items] of tagPosts) {
      tagPages.push(...paginate(items, tagName));
    }

    // Build author pages
    const authorPages = [];
    for (const [authorName, items] of authorPosts) {
      authorPages.push(...paginate(items, authorName));
    }

    // Build category pages
    const categoryPages = [];
    for (const [categoryName, items] of categoryPosts) {
      categoryPages.push(...paginate(items, categoryName));
    }

    collectionsCache = {
      posts,
      pages,
      paginatedPosts,
      tagPages,
      authorPages,
      categoryList: [...categorySet],
      categoryPages,
    };

    return collectionsCache;
  }

  eleventyConfig.addCollection(
    "tagPages",
    (api) => buildCollections(api).tagPages,
  );
  eleventyConfig.addCollection(
    "authorPages",
    (api) => buildCollections(api).authorPages,
  );
  eleventyConfig.addCollection(
    "categoryList",
    (api) => buildCollections(api).categoryList,
  );
  eleventyConfig.addCollection(
    "categoryPages",
    (api) => buildCollections(api).categoryPages,
  );
  eleventyConfig.addCollection("posts", (api) => buildCollections(api).posts);
  eleventyConfig.addCollection("pages", (api) => buildCollections(api).pages);
  eleventyConfig.addCollection(
    "paginatedPosts",
    (api) => buildCollections(api).paginatedPosts,
  );

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "./",
      includes: `themes/${config.theme}/_includes`,
      layouts: `themes/${config.theme}/_includes/layouts`,
      data: "_data",
      output: "_site",
    },
  };
}

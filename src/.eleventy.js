import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { icons } from "lucide";
import { DateTime } from "luxon";
import htmlmin from "html-minifier-terser";
import Image from "@11ty/eleventy-img";
import config from "../config.js";
import excerptGenerator from "./_plugins/excerpt-generator.js";
import postManagement from "./_plugins/post-management.js";
import anchorLinks from "./_plugins/anchor-links.js";
import previewImage from "./_plugins/preview-image.js";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("config.js");
  eleventyConfig.ignores.add("pages/!(about.md)");
  eleventyConfig.ignores.add("*.md");
  eleventyConfig.ignores.add("*.njk");
  eleventyConfig.addPlugin(excerptGenerator);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(postManagement);
  eleventyConfig.addPlugin(anchorLinks);
  eleventyConfig.addPlugin(previewImage);
  eleventyConfig.addGlobalData("config", config);
  eleventyConfig.addPassthroughCopy({ "./images": "images" });
  eleventyConfig.addPassthroughCopy({
    [`./themes/${config.theme}/assets/fonts`]: "assets/fonts",
  });
  // Add date filter for sitemap

  eleventyConfig.addFilter("postDate", function (date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("date", function (date, format) {
    let d;
    if (date == "") {
      d = new Date();
    } else {
      d = new Date(date);
    }
    if (format === "YYYY-MM-DD") {
      return (
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0")
      );
    }
    return d.toISOString();
  });
  eleventyConfig.addFilter("assetHash", function (assetPath) {
    const timestamp = Date.now();
    return `${assetPath}?v=${timestamp}`;
  });

  eleventyConfig.addFilter("slice", function (array, start, end) {
    return array.slice(start, end);
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
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

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    outputDir: "./_site/images/",
    urlPath: "/images/",
    // output image formats
    formats: ["avif", "webp"],
    // output image widths
    widths: [360, 720, 1080],
    sizes:
      "(max-width: 360px) 360px, (max-width: 720px) 720px, (max-width: 1080px) 1080px",

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

  eleventyConfig.addAsyncFilter("imageFilter", async function (src) {
    if (!src) return "";
    src = `.${src}`;

    try {
      let metadata = await Image(src, {
        widths: [1080],
        formats: ["avif", "webp"],
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
  });

  eleventyConfig.addShortcode(
    "icon",
    function (iconName, className = "w-5 h-5") {
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
    },
  );

  eleventyConfig.addCollection("tagPages", function (collectionApi) {
    const tagPages = [];
    const tags = new Set();
    const tagPosts = new Map();

    // collect all tags and their posts
    collectionApi.getAll().forEach((item) => {
      if ("tags" in item.data) {
        let itemTags = item.data.tags;
        if (typeof itemTags === "string") itemTags = [itemTags];
        itemTags
          .filter((tag) => !["all", "nav", "post"].includes(tag)) // filter out system tags
          .forEach((tag) => {
            tags.add(tag);
            if (!tagPosts.has(tag)) {
              tagPosts.set(tag, []);
            }
            tagPosts.get(tag).push(item);
          });
      }
    });

    // Create paginated pages for each tag
    tags.forEach((tagName) => {
      const posts = tagPosts.get(tagName);
      const sortedPosts = posts.sort((a, b) => {
        return b.date - a.date;
      });
      const postsPerPage = config.postsPerPage;
      const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        const pagedItems = sortedPosts.slice(
          startIndex,
          startIndex + postsPerPage,
        );

        const page = {
          name: tagName,
          page: pageNumber,
          total: sortedPosts.length, // total posts for this tag
          items: pagedItems,
        };

        tagPages.push(page);
      }
    });

    return tagPages;
  });

  eleventyConfig.addCollection("authorPages", function (collectionApi) {
    const authorPages = [];
    const authors = new Set();
    const authorPosts = new Map();
    collectionApi.getAll().forEach((item) => {
      if ("author" in item.data) {
        let itemAuthors = item.data.author;
        if (typeof itemAuthors === "string") itemAuthors = [itemAuthors];
        itemAuthors.forEach((author) => {
          authors.add(author);
          if (!authorPosts.has(author)) {
            authorPosts.set(author, []);
          }
          authorPosts.get(author).push(item);
        });
      }
    });

    authors.forEach((authorName) => {
      const posts = authorPosts.get(authorName);
      const sortedPosts = posts.sort((a, b) => {
        return b.date - a.date;
      });
      const postsPerPage = config.postsPerPage;
      const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        const pagedItems = sortedPosts.slice(
          startIndex,
          startIndex + postsPerPage,
        );
        const page = {
          name: authorName,
          page: pageNumber,
          total: sortedPosts.length, // total posts for this author
          items: pagedItems,
        };
        authorPages.push(page);
      }
    });
    return authorPages;
  });

  eleventyConfig.addCollection("categoryList", function (collectionApi) {
    const categories = new Set();
    collectionApi.getAll().forEach((item) => {
      if ("category" in item.data && item.data.category) {
        const category = item.data.category;
        // Validate category format
        if (category === null || category === undefined) {
          throw new Error(
            `Invalid category format in "${item.inputPath}": category cannot be null or undefined. Expected format: category: "CategoryName"`,
          );
        }

        if (typeof category !== "string") {
          throw new Error(
            `Invalid category format in "${
              item.inputPath
            }": category must be a string. Found: ${typeof category}. Expected format: category: "CategoryName"`,
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
        categories.add(category);
      }
    });
    return [...categories];
  });

  eleventyConfig.addCollection("categoryPages", function (collectionApi) {
    const categoryPages = [];
    const categories = new Set();
    const categoryPosts = new Map();

    // collect all categories and their posts
    collectionApi.getAll().forEach((item) => {
      if ("category" in item.data && item.data.category) {
        const category = item.data.category;
        // Validate category format
        if (category === null || category === undefined) {
          throw new Error(
            `Invalid category format in "${item.inputPath}": category cannot be null or undefined. Expected format: category: "CategoryName"`,
          );
        }

        if (typeof category !== "string") {
          throw new Error(
            `Invalid category format in "${
              item.inputPath
            }": category must be a string. Found: ${typeof category}. Expected format: category: "CategoryName"`,
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
        categories.add(category);
        if (!categoryPosts.has(category)) {
          categoryPosts.set(category, []);
        }
        categoryPosts.get(category).push(item);
      }
    });

    // Create paginated pages for each category
    categories.forEach((categoryName) => {
      const posts = categoryPosts.get(categoryName);
      const sortedPosts = posts.sort((a, b) => {
        return b.date - a.date;
      });
      const postsPerPage = config.postsPerPage;
      const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        const pagedItems = sortedPosts.slice(
          startIndex,
          startIndex + postsPerPage,
        );

        const page = {
          name: categoryName,
          page: pageNumber,
          total: sortedPosts.length, // total posts for this category
          items: pagedItems,
        };

        categoryPages.push(page);
      }
    });

    return categoryPages;
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    const allPosts = collectionApi
      .getAll()
      .filter((item) => {
        const layout = item.data.layout;
        return layout === "post" || layout === "post.njk";
      })
      .sort((a, b) => {
        const dateA = new Date(a.data.date || a.date);
        const dateB = new Date(b.data.date || b.date);
        return dateB - dateA;
      });

    return allPosts;
  });

  eleventyConfig.addCollection("pages", function (collectionApi) {
    const allPages = collectionApi.getAll().filter((item) => {
      const layout = item.data.layout;
      return layout === "page" || layout === "page.njk";
    });
    return allPages;
  });

  eleventyConfig.addCollection("paginatedPosts", function (collectionApi) {
    const allPosts = collectionApi
      .getAll()
      .filter((item) => {
        // Check if the post uses layouts/post layout
        const layout = item.data.layout;
        return layout === "post" || layout === "post.njk";
      })
      .sort((a, b) => {
        // Sort by date in descending order (newest first)
        const dateA = new Date(a.data.date || a.date);
        const dateB = new Date(b.data.date || b.date);
        return dateB - dateA;
      });

    const paginatedPages = [];
    const postsPerPage = config.postsPerPage;
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const startIndex = (pageNumber - 1) * postsPerPage;
      const pagedItems = allPosts.slice(startIndex, startIndex + postsPerPage);

      const page = {
        page: pageNumber,
        total: allPosts.length,
        items: pagedItems,
        postsPerPage: postsPerPage,
      };

      paginatedPages.push(page);
    }

    return paginatedPages;
  });

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "./",
      includes: "themes/" + config.theme + "/_includes",
      layouts: "themes/" + config.theme + "/_includes/layouts",
      data: "_data",
      output: "_site",
    },
  };
}

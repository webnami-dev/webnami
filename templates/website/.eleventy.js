import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { icons } from "lucide";
import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPassthroughCopy({ "./src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "./src/assets/fonts": "assets/fonts" });
  // Add date filter for sitemap
  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    if (format === "YYYY-MM-DD") {
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(d.getDate()).padStart(2, "0")}`;
    }
    return d.toISOString();
  });

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("assetHash", (assetPath) => {
    const timestamp = Date.now();
    return `${assetPath}?v=${timestamp}`;
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

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["webp", "jpeg"],
    // output image widths
    widths: [400, 800, 1280],
    sizes: "100vw",

    // Add this to disable dev server transform
    transformOnRequest: false,

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });

  eleventyConfig.addShortcode("icon", (iconName, className = "") => {
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

  return {
    markdownTemplateEngine: false,
    dir: {
      input: "src",
      output: "_site",
    },
  };
}

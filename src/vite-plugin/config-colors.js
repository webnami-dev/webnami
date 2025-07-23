import fs from "fs";
import path from "path";

function configColorsPlugin() {
  let configPath;
  let outputPath;

  // Define the generateColors function outside of the plugin methods
  const generateColors = () => {
    try {
      // Read config.json
      const configData = JSON.parse(fs.readFileSync(configPath, "utf8"));

      if (!configData.colors) {
        console.warn("No colors found in config.json");
        return;
      }

      // Generate CSS custom properties
      let colorCSS = "";
      for (const [colorName, colorValue] of Object.entries(configData.colors)) {
        colorCSS += `  --color-${colorName}: ${colorValue};\n`;
      }

      const cssContent = `/* Auto-generated colors from config.json */
@theme {
${colorCSS}}
`;

      // Ensure directory exists
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Write colors CSS
      fs.writeFileSync(outputPath, cssContent);
      console.log("✅ Generated colors.css from config.json via Vite");
    } catch (error) {
      console.error("Error generating colors from config.json:", error);
    }
  };

  return {
    name: "config-colors",
    configResolved(resolvedConfig) {
      configPath = path.resolve(resolvedConfig.root, "config.json");
      outputPath = path.resolve(
        resolvedConfig.root,
        "src/assets/css/colors.css"
      );
    },
    buildStart() {
      // Generate colors on build start
      generateColors();

      // Watch config.json for changes
      this.addWatchFile(configPath);
    },
    handleHotUpdate({ file, server }) {
      // Regenerate colors when config.json changes
      if (file === configPath) {
        generateColors();

        // Trigger HMR update for the CSS
        const modules = server.moduleGraph.getModulesByFile(outputPath);
        if (modules) {
          modules.forEach((module) => {
            server.reloadModule(module);
          });
        }

        return [];
      }
    },
  };
}

export default configColorsPlugin;

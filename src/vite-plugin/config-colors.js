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
        // Base color
        colorCSS += `  --color-${colorName}: ${colorValue};\n`;

        // Light shades
        colorCSS += `  --color-${colorName}-50: color-mix(in srgb, ${colorValue} 5%, white);\n`;
        colorCSS += `  --color-${colorName}-100: color-mix(in srgb, ${colorValue} 10%, white);\n`;
        colorCSS += `  --color-${colorName}-200: color-mix(in srgb, ${colorValue} 20%, white);\n`;
        colorCSS += `  --color-${colorName}-300: color-mix(in srgb, ${colorValue} 30%, white);\n`;
        colorCSS += `  --color-${colorName}-400: color-mix(in srgb, ${colorValue} 40%, white);\n`;

        // Base shade
        colorCSS += `  --color-${colorName}-500: ${colorValue};\n`;

        // Dark shades
        colorCSS += `  --color-${colorName}-600: color-mix(in srgb, ${colorValue} 80%, black);\n`;
        colorCSS += `  --color-${colorName}-700: color-mix(in srgb, ${colorValue} 70%, black);\n`;
        colorCSS += `  --color-${colorName}-800: color-mix(in srgb, ${colorValue} 60%, black);\n`;
        colorCSS += `  --color-${colorName}-900: color-mix(in srgb, ${colorValue} 40%, black);\n`;
        colorCSS += `  --color-${colorName}-950: color-mix(in srgb, ${colorValue} 20%, black);\n`;
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

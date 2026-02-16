import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Possible problems
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "warn",
      "no-use-before-define": ["error", { functions: false }],

      // Best practices
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "warn",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-useless-return": "error",
      "no-else-return": "warn",
      curly: ["error", "multi-line"],
      "default-case-last": "error",

      // ES6+
      "prefer-arrow-callback": "warn",
      "no-useless-rename": "error",
      "object-shorthand": ["warn", "always"],
      "prefer-destructuring": ["warn", { object: true, array: false }],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
    },
  },
  // Browser scripts (admin frontend)
  {
    files: ["admin/assets/js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Alpine: "readonly",
        EasyMDE: "readonly",
        flatpickr: "readonly",
        lucide: "readonly",
        showAlert: "readonly",
        showConfirm: "readonly",
        flashAlert: "readonly",
        runSEOCheck: "readonly",
      },
    },
  },
  // Theme frontend assets
  {
    files: ["themes/**/assets/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: ["_site/", "node_modules/", "admin/dist/", ".cache/"],
  },
];

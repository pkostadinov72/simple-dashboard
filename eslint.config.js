import eslintJS from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const { configs: eslintRecommended } = eslintJS;

export default [
  {
    files: ["**/*.{ts,tsx}"], // Only TypeScript files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.eslint.json"
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin
    },
    rules: {
      ...eslintRecommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off" // React 17+ doesn't need React in scope
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: [
      "vite.config.ts",
      "eslint.config.js",
      "postcss.config.js",
      "tailwind.config.js"
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
        // No project needed for these files
      }
    },
    rules: {} // Optional: add config-specific rules
  }
];

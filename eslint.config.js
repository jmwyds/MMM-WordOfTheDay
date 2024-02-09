const globals = require("globals");
const {configs: eslintConfigs} = require("@eslint/js");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginStylistic = require("@stylistic/eslint-plugin");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");

const config = [
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        config: "readonly",
        Log: "readonly",
        Module: "readonly"
      }
    },
    plugins: {
      ...eslintPluginStylistic.configs["all-flat"].plugins,
      import: eslintPluginImport
    },
    rules: {
      ...eslintConfigs.all.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginStylistic.configs["all-flat"].rules,
      "capitalized-comments": "off",
      "consistent-this": "off",
      "func-style": "off",
      "init-declarations": "off",
      "line-comment-position": "off",
      "max-lines-per-function": ["error", 100],
      "max-statements": ["error", 50],
      "no-await-in-loop": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-undefined": "off",
      "one-var": "off",
      "prefer-destructuring": "off",
      "sort-keys": "off",
      strict: "off",
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/object-property-newline": "off",
      "@stylistic/quote-props": ["error", "as-needed"],
      "@stylistic/padded-blocks": ["error", "never"],
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/no-this-assignment": "off",
      "unicorn/prefer-module": "off"
    }
  }
];

/*
 * Set debug to true for testing purposes.
 * Since some plugins have not yet been optimized for the flat config,
 * we will be able to optimize this file in the future. It can be helpful
 * to write the ESLint config to a file and compare it after changes.
 */
const debug = false;

if (debug === true) {
  const FileSystem = require("node:fs");
  FileSystem.writeFile("eslint-config-DEBUG.json", JSON.stringify(config, null, 2), (error) => {
    if (error) {
      throw error;
    }
  });
}

module.exports = config;

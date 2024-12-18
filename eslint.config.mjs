import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJs from "@eslint/js";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const config = [
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginJs.configs.all,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Log: "readonly",
        Module: "readonly",
        config: "readonly"
      },
      sourceType: "commonjs"
    },
    plugins: {
      ...eslintPluginStylistic.configs["all-flat"].plugins
    },
    rules: {
      ...eslintPluginStylistic.configs["all-flat"].rules,
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/object-property-newline": "off",
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/quote-props": ["error", "as-needed"],
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
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/no-this-assignment": "off",
      "unicorn/prefer-module": "off"
    }
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node
      },
      sourceType: "module"
    },
    plugins: {
      ...eslintPluginStylistic.configs["all-flat"].plugins
    },
    rules: {
      ...eslintPluginStylistic.configs["all-flat"].rules,
      "@stylistic/array-element-newline": "off",
      "@stylistic/indent": ["error", 2],
      "@stylistic/lines-around-comment": "off",
      "@stylistic/padded-blocks": ["error", "never"],
      "func-style": "off",
      "import/no-unresolved": "off",
      "max-lines-per-function": ["error", 100],
      "max-statements": ["error", 15],
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "one-var": "off",
      "prefer-destructuring": "off"
    }
  }
];

export default config;

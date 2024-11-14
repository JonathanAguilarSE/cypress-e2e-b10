// import globals from "globals";
// import pluginJs from "@eslint/js";


// /** @type {import('eslint').Linter.Config[]} */
export default [
  // {languageOptions: { globals: globals.browser }},
  // pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2],
      "no-unused-vars": "error",
      semi: ["error", "never"],
      quotes: ["error", "saingle"],
      "max-len": [
        "error",
        { code: 120, ignoreComments: true, ignoreStrings: true },
      ]
    }
  }
];
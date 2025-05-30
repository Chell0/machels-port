export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: "consistent",
  jsxDoubleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: [],
  overrides: [
    {
      files: ["*.json", "*.json5"],
      options: {
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
      },
    },
    {
      files: ["*.md"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};

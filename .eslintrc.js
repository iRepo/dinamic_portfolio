const PROD = process.env.NODE_ENV === "production";
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "react/display-name": "off",
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": PROD ? "error" : "off",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-key": "error",
    "react/no-array-index-key": "warn",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};

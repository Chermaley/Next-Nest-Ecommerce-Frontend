module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    // Existing rules
    "comma-dangle": "off", // https://eslint.org/docs/rules/comma-dangle
    "function-paren-newline": "off", // https://eslint.org/docs/rules/function-paren-newline
    "global-require": "off", // https://eslint.org/docs/rules/global-require
    "import/no-dynamic-require": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    "no-inner-declarations": "off", // https://eslint.org/docs/rules/no-inner-declarations
    "no-useless-escape": "off",
    "class-methods-use-this": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": 0,
    "no-empty": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/no-unescaped-entities": 0,
  },
};

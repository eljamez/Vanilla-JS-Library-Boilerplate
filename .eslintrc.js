module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    "jest/globals": true,
    es6: true,
  },
  globals: { module: false },
  extends: "eslint:recommended",
  plugins: ["jest"],
};

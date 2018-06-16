module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    "jest/globals": true
  },
  extends: "standard",
  plugins: ["jest"]
};

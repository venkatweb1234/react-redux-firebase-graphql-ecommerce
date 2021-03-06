module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "max-len": ["error", {"code": 500}],
  },
  parserOptions: {
    "ecmaVersion": 2020,
  },
};

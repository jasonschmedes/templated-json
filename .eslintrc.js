module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    /**
     * Javascript Rules
     */

  },
  overrides: [{
    files: [
      "*.ts",
      "*.tsx",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      ecmaversion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
    },
    rules: {
      /**
       * Typescript Rules
       */

    },
  }],
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import', 'sort-destructure-keys'],
  rules: {
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
};

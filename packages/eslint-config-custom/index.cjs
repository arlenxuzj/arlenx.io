module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'turbo',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['**/node_modules/*', '**/dist/*', '**/build/*'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};

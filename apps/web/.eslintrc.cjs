module.exports = {
  root: true,
  extends: ['custom'],
  overrides: [
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
      rules: {
        'no-undef': 'off',
        'react/jsx-no-undef': 'off'
      }
    }
  ]
};

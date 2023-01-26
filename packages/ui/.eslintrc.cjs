module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        }
      }
    ]
  }
};

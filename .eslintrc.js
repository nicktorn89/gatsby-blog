module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
  },
};

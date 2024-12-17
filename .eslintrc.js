module.exports = {
    env: {
      jest: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      'plugin:jest/recommended',
      'plugin:testing-library/react-native',
    ],
    plugins: ['testing-library', 'jest'],
    rules: {
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/await-async-query': 'error',
      'jest/expect-expect': 'warn',
    },
  };
  
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  plugins: ['@typescript-eslint'],
  env: {
    jest: true,
  },
};

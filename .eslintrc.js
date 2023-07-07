module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        moduleDirectory: ['node_modules', './'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
  },
  env: {
    'react-native/react-native': true,
  },
};

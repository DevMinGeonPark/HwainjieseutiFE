module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './assets',
          '@Atomic': './src/Atomic',
          '@Modules': './src/Modules',
          '@Templates': './src/Templates',
          '@Navigators': './src/Navigators',
          '@hooks': './src/hooks',
          '@Utils': './src/Utils',
          '@Types': './src/types',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};

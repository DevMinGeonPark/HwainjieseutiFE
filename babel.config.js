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
          '@API': './src/API',
          '@Store': './src/Store',
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
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};

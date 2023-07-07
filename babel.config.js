module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          // '@assets': './assets',
          // '@Components': './src/Components',
          // '@Atomic': './src/Components/Atomic',
          // '@Modules': './src/Components/Modules',
          '@Templates': './src/Components/Templates',
          '@Navigations': './src/Navigations',
          // '@Utils': './src/Utils',
          // '@recoils': './src/recoils'
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
  ],
};

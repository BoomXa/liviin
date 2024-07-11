module.exports = function (api) {
  api.cache(true);


  return {
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      }
    }
  };
};

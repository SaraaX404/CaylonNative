const { getDefaultConfig } = require("@react-native/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  // Extend the default resolver config to include the SVG extension
  defaultConfig.resolver.assetExts = [
    ...defaultConfig.resolver.assetExts,
    "svg",
  ];

  return defaultConfig;
})();


const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { withNativeWind } = require('nativewind/metro')

const defaultConfig = getDefaultConfig(__dirname)
const { resolver: { assetExts, sourceExts } } = defaultConfig

/** @type {import('@react-native/metro-config').MetroConfig} */
const config = {
  transformer: { babelTransformerPath: require.resolve('react-native-svg-transformer') },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
}

module.exports = withNativeWind(
  mergeConfig(defaultConfig, config),
  { input: './src/style/tailwind.css', disableTypeScriptGeneration: true, inlineRem: 16 },
)

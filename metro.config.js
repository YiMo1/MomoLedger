const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

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

module.exports = mergeConfig(defaultConfig, config)

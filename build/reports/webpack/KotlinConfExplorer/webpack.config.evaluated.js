{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/js/packages/KotlinConfExplorer/kotlin/KotlinConfExplorer.js'
    ]
  },
  output: {
    path: '/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/distributions',
    filename: [Function: filename],
    library: 'KotlinConfExplorer',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/processedResources/Js/main'
    ]
  }
}
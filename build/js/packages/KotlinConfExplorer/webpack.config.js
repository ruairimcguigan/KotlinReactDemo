var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/js/packages/KotlinConfExplorer/kotlin/KotlinConfExplorer.js"]
};

config.output = {
    path: "/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "KotlinConfExplorer.js"
            : "KotlinConfExplorer-[name].js";
    },
    library: "KotlinConfExplorer",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/processedResources/Js/main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("/Users/ruairimcguigan/Development/React/KotlinConfExplorer/build/reports/webpack/KotlinConfExplorer/webpack.config.evaluated.js", evaluatedConfig, function (err) {});

module.exports = config

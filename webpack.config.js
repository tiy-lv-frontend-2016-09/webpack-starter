var path = require('path')

module.exports = {
  entry: path.resolve('./src/app.js'),
  output: {
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      // js and jsx
      {
        test: /\.jsx?$/i, 
        loader: 'babel',
        include: /src/,
        exclude: /(node_modules|bower_components|dist)/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
}

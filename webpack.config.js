var path = require('path');

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /\.js$/, 
        loader: 'babel' },
      { test: /\.html$/, 
        loader: 'file?name=[name].[ext]' },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};

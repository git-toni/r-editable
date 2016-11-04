
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/dist',
    library:'r-editable',
    libraryTarget:'umd',
    filename: 'r-editable.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

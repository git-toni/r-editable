var path = require('path');
console.log('hola wbpack');
console.log(path.join(__dirname,'..','node_modules'));

    //'./example/index.js'
module.exports = {
  entry: [
    path.resolve(__dirname, 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 're-example.js',
    libraryTarget:'umd',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
      loader: 'file-loader?name=fonts/[name].[ext]' 
    },
    { test: /\.json$/, loader: "json-loader" }
    ]
  },
  resolve: {
    //root: path.join(__dirname,'..','node_modules'),
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8877
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
};

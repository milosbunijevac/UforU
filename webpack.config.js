const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: '/node_modules/',
        test: /\.js$/
      }
    ]
  }
};
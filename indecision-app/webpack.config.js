const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8082,
    clientLogLevel: 'silent'
  }
};

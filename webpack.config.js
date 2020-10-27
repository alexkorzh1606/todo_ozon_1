const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './js/code.js',
  devtool: 'inline-cheap-source-map',
  watchOptions: {
    ignored: ['node_modules/**']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
};
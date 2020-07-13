module.exports = {
  entry: './scripts/client.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: `client.bundle.js`
  }
}
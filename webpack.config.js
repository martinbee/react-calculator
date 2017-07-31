const path = require('path'); // import Node.js path module for path related operations

// create our config object
const config = {
  entry: path.join(__dirname, '/client/index.js'), // Absolute path to our entry file
  output: { // our output configuration
    path: path.join(__dirname, './public/'), // output path (directory/folder)
    filename: 'bundle.js' // output bundled file name
  },
  module: { // define our loaders here
    // array of rules to handle different file types
    rules: [
      {
        test: /\.(js|jsx)$/, // check for .js and .jsx files (uses Regex)
        loader: 'babel-loader' // use this loader for .js and .jsx files found
      },
      {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.jpg$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      }
    ],
  },
  // set the file extensions we want webpack to resolve
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

// export our config object.
// You may have noticed we are using es5 syntax here. This is because Webpack, which would be using this
// file, expects es5 syntax
module.exports = config;

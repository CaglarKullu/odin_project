const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Switch to 'production' when ready to deploy
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map', // Useful for development, switch to a different option for production
  devServer: {
    static: './dist',
    hot: true, // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      template: './src/index.html', // Template file for your HTML
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/', // Ensure correct base path for all assets, especially important for GitHub Pages
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files using Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Compile ES6+ down to ES5
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // Inject CSS into the DOM
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enable CSS Modules for local scope CSS
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Handle image files
      },
      // Additional loaders for other file types can be added here
    ],
  },
  optimization: {
    runtimeChunk: 'single', // Create a runtime file to be shared for all generated chunks
  },
};

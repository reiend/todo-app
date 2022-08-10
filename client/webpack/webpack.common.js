const path = require('path'); /* node path */
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin'); /* for loading / create html */
const Dotenv = require('dotenv-webpack');

const ROOT_PATH = {
  src: path.resolve(__dirname, `../src`)
};

module.exports = {
  resolve: {
    // for shorten imports
    alias: {
      // default root component
      '@components': `${ROOT_PATH.src}/res/components`,

      // src
      '@src': `${ROOT_PATH.src}`,

      // globals
      '@globals': `${ROOT_PATH.src}/globals`,

      // styles
      '@styles': `${ROOT_PATH.src}/styles`,

      // assets
      '@assets': `${ROOT_PATH.src}/../public/assets`
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        // transpiler
        test: /\.m?(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      //  pulling assets
      {
        test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
        type: 'asset/inline'
      },

      // pulling fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    // create root html
    new HtmlWebpackPlugin({
      title: 'TodoApp',
      filename: 'index.html',
      template: `${ROOT_PATH.src}/index.html`
    }),

    new Dotenv()
  ]
};

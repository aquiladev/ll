const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './node_modules/reveal.js/js/reveal.js' },
      { from: './node_modules/reveal.js/lib/js/head.min.js', to: 'lib' },
      { from: './node_modules/reveal.js/plugin/markdown/marked.js', to: 'plugin/markdown' },
      { from: './node_modules/reveal.js/plugin/markdown/markdown.js', to: 'plugin/markdown' },
      { from: './node_modules/reveal.js/plugin/notes/notes.js', to: 'plugin/notes' },
      { from: './node_modules/reveal.js/plugin/highlight/highlight.js', to: 'plugin/highlight' },
      { from: './css', to: 'css' },
      { from: './node_modules/reveal.js/css/reveal.css', to: 'css' },
      { from: './node_modules/reveal.js/css/theme/black.css', to: 'css/theme' },
      { from: './node_modules/reveal.js/lib/css/zenburn.css', to: 'lib/css' },
      { from: './node_modules/reveal.js/css/print/pdf.css', to: 'css/print' },
      { from: './node_modules/reveal.js/css/print/paper.css', to: 'css/print' },
      { from: './node_modules/reveal.js/lib/font/source-sans-pro', to: 'lib/font/source-sans-pro' },
      { from: './images', to: 'images' }
    ])
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  }
};
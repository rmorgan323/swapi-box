const path = require('path');
    
const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname,'/dist')
}

var config = {
  context: PATHS.src,
  entry: {
    'index.html': 'file?name=index.html!val!html!./assets/index.html'
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.(jpg|png)$/,
      loader: 'file'
    }]
  }
};

module.exports = config;
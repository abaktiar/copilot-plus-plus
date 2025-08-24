const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = {
  ...baseConfig,
  
  // Enhanced development configuration
  mode: 'development',
  devtool: 'source-map', // Changed from eval-source-map to avoid CSP issues
  
  // Development server configuration (for standalone development)
  devServer: {
    static: {
      directory: path.join(__dirname, 'media'),
    },
    compress: true,
    port: 9000,
    hot: true,
    liveReload: true,
    watchFiles: [
      'src/webviews/**/*.tsx',
      'src/webviews/**/*.ts',
      'src/webviews/**/*.css'
    ],
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  
  // Enhanced watch options for development
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200, // Faster response in dev
    poll: 500 // More frequent polling for better responsiveness
  },
  
  // Disable performance hints in development
  performance: false,
  
  // Enhanced stats for development
  stats: {
    errorDetails: true,
    colors: true,
    modules: false,
    chunks: false,
    chunkModules: false,
    timings: true,
    builtAt: true,
    version: false,
    hash: false
  }
};
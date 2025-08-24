const path = require('path');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  mode: production ? 'production' : 'development',
  devtool: production ? false : 'inline-source-map',
  
  entry: {
    'pr-description': './src/webviews/pr-description/index.tsx',
    'pr-review': './src/webviews/pr-review/index.tsx',
    'breaking-changes': './src/webviews/breaking-changes/index.tsx'
  },
  
  output: {
    path: path.resolve(__dirname, 'media'),
    filename: '[name]/[name].bundle.js',
    clean: false // Don't clean the entire media directory as it contains other assets
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@shared': path.resolve(__dirname, 'src/webviews/shared')
    }
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.webviews.json'
          }
        },
        exclude: [
          /node_modules/,
          /__tests__/,
          /\.test\./,
          /\.spec\./
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  
  externals: {
    // VSCode API is provided by the webview environment
    vscode: 'commonjs vscode'
  },
  
  optimization: {
    minimize: production,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          filename: 'shared/vendors.bundle.js'
        },
        shared: {
          test: /[\\/]src[\\/]webviews[\\/]shared[\\/]/,
          name: 'shared',
          chunks: 'all',
          filename: 'shared/shared.bundle.js'
        }
      }
    }
  },
  
  stats: {
    errorDetails: true
  }
};
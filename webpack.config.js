const path = require("path");

const production = process.env.NODE_ENV === "production";
const isDevelopment = !production;

module.exports = {
  mode: production ? "production" : "development",
  devtool: "source-map", // Always use source-map to avoid CSP issues in VSCode webviews

  entry: {
    "pr-description": "./src/webviews/pr-description/index.tsx",
    "pr-review": "./src/webviews/pr-review/index.tsx",
    "breaking-changes": "./src/webviews/breaking-changes/index.tsx",
  },

  output: {
    path: path.resolve(__dirname, "media"),
    filename: "[name]/[name].bundle.js",
    clean: false, // Don't clean the entire media directory as it contains other assets
    publicPath: "/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@shared": path.resolve(__dirname, "src/webviews/shared"),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.webviews.json",
            transpileOnly: isDevelopment, // Faster builds in development
            compilerOptions: {
              sourceMap: true,
              // Ensure no eval is used in TypeScript compilation
              inlineSourceMap: false,
              inlineSources: false,
            },
          },
        },
        exclude: [/node_modules/, /__tests__/, /\.test\./, /\.spec\./],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  externals: {
    // VSCode API is provided by the webview environment
    vscode: "commonjs vscode",
  },

  optimization: {
    minimize: production,
    // Ensure no eval is used in any environment
    nodeEnv: production ? "production" : "development",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          filename: "shared/vendors.bundle.js",
        },
        shared: {
          test: /[\\/]src[\\/]webviews[\\/]shared[\\/]/,
          name: "shared",
          chunks: "all",
          filename: "shared/shared.bundle.js",
        },
      },
    },
  },

  // Enhanced development experience
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },

  // Performance hints
  performance: {
    hints: production ? "warning" : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  stats: {
    errorDetails: true,
    colors: true,
    modules: false,
    chunks: false,
    chunkModules: false,
    timings: true,
  },

  // Cache configuration for faster rebuilds
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
};

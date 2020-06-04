import path from 'path';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __DEV__: boolean = process.env.NODE_ENV !== 'production';

export default (): Configuration => ({
  mode: __DEV__ ? 'development' : 'production',
  optimization: {
    minimizer: [new TerserPlugin({})],
  },
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      minify: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
});

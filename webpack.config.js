const loaders = [
  'babel?presets[]=react,presets[]=es2015,presets[]=stage-2',
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: process.env.NODE_ENV === 'production' ?
          loaders :
          ['react-hot', ...loaders],
      },
    ],
  },
};

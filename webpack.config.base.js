module.exports = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              ['@babel/env', { targets: { browsers: ['last 7 versions'] } }]
            ]
          }
        }
      }
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  }
};

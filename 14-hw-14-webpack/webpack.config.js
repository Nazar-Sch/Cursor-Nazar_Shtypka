const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        },
        {
            test: /\.(gif|png|jpe?g|svg|webp)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              },
            ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    
  ]
},


}
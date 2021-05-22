const mix = require('laravel-mix')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('laravel-mix-clean')
const fs = require('fs')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

mix
  .setPublicPath('dist')

if (mix.inProduction()) {
  mix
    .clean()
} else {
  mix
    .options({
      hmrOptions: {
        host: 'localhost',
        port: 3000,
      },
    })
}

mix
  .copy('src/assets/static', 'dist/assets/static')
  .js('src/assets/js/generator.js', 'dist/assets/js/generator.js')
  .react()
  .js('src/assets/js/app.js', 'dist/assets/js/app.js')
  .vue()
  .webpackConfig({
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/template.ejs',
        inject: false,
        publicPath: '',
        scriptLoading: 'blocking',
        minify: {
          preserveLineBreaks: true,
          collapseWhitespace: false,
          removeComments: false,
        },
      }),
    ],
  })

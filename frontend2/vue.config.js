

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    index: 'home.html',
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000',
      },
      '^/admin': {
        target: 'http://127.0.0.1:8000',
      },
      '^/static': {
        target: 'http://127.0.0.1:8000',
      }
    }
  },


  outputDir: 'dist',
  publicPath: '/',
  assetsDir: '',

  pages: {

    home: {
      // entry for the page
      entry: 'src/pages/main_home.js', // 웹팩 빌드 작업의 시작
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'home.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Vuedjangoblog/home.html', // webpack title
      minify: false,
    },

    post_list: {
      entry: 'src/pages/main_post_list.js', // 웹팩 빌드 작업의 시작
      template: 'public/index.html',
      filename: 'post_list.html',
      title: 'Vuedjangoblog/post_list.html', // webpack title
      minify: false,
    },

    post_detail: {
      entry: 'src/pages/main_post_detail.js',
      template: 'public/index.html',
      filename: 'post_detail.html',
      title: 'Vuedjangoblog/post_detail.html',
      minify: false,
    },
  },

  css: {
    extract: { ignoreOrder: true },
  }
}

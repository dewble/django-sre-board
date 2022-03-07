module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    index: 'home.html',
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
      title: 'SRE/home.html', // webpack title
      minify: false,
    },

    sre_list: {
      // entry for the page
      entry: 'src/pages/main_sre_list.js', // 웹팩 빌드 작업의 시작
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'sre_list.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SRE/sre_list.html', // webpack title
      minify: false,
    },

    sre_detail: {
      // entry for the page
      entry: 'src/pages/main_sre_detail.js', // 웹팩 빌드 작업의 시작
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'sre_detail.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SRE/sre_detail.html', // webpack title
      minify: false,
    },
  }
}
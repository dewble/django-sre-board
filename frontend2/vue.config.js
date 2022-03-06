module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

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
      title: 'SRB/home.html', // webpack title
      minify: false,
    },

    srb_list: {
      // entry for the page
      entry: 'src/pages/main_srb_list.js', // 웹팩 빌드 작업의 시작
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'srb_list.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SRB/srb_list.html', // webpack title
      minify: false,
    },

    srb_detail: {
      // entry for the page
      entry: 'src/pages/main_srb_detail.js', // 웹팩 빌드 작업의 시작
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'srb_detail.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SRB/srb_detail.html', // webpack title
      minify: false,
    },
  }
}
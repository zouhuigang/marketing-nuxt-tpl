module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'marketing-nuxt-tpl',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'marketing Nuxt.js project template' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    /*
    自定义安装插件
    plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入
    */
    plugins: ['~/plugins/vue-notifications','~/plugins/zantui'],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {}
  }
  
  
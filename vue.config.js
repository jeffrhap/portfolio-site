module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Portfolio | Jeffrey Happel';
        args[0].meta = [
          {
            name: 'description',
            content: 'Hi, I\'m Jeffrey, a front-end developer.'
          },
        ]
        return args
      })
  },
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "@/assets/scss/config/_variables.scss"; @import "@/assets/scss/config/_mixins.scss";`
      }
    }
  }
};

const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "pt",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin(
          path.resolve(__dirname, '../server/public'),
          ['/en', '/pt', '/en/skills', '/en/works', '/pt/skills', '/pt/works'],
        ),
      ]
    }
  }
};
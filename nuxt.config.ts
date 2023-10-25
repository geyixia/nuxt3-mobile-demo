// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@vant/nuxt'],
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})

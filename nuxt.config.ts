// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

const path = require('path')

// 获取当前环境
const { env } = require('./env')

export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3001
  },

  // 环境变量配置
  runtimeConfig: {

    // 私有键（仅在服务端可用）

    // 公共键（暴露给客户端）
    public: {
      baseURL: env.BASE_URL,
      apiBase: env.API_BASE
    }
  },

  modules: ['vuetify-nuxt-module', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt'],
  // eslint: {
  //   checker: true // <---
  // },
  alias: {
    '/@/': path.resolve('./')
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'https://api-frontend-interview-server.metcfire.com.tw',
        changeOrigin: true
      }
    }
  },

  // CSS 配置
  // css: [
  //   '@/assets/styles/custom-vuetify.css'
  // ],

  // 头部配置
  app: {
    head: {
      title: `測試 App`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: `測試` }

      ],
      link: [
        // Favicon 配置
        { rel: 'icon', type: 'image/x-icon', href: '/fav.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/fav.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/fav.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav.png' },
        { rel: 'manifest', href: '/site.webmanifest' }

      ]
    }
  },

  vuetify: {
    moduleOptions: {
      /* module specific options */
      styles: {
        configFile: 'assets/styles/custom-vuetify.scss'
      },
      ssrClientHints: {
        reloadOnFirstRequest: false
      }
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light'
      },
      defaults: {
        VBtn: {
          class: 'custom-btn',
          variant: 'elevated',
          color: 'primary'
        }
      }
    }
  }
})

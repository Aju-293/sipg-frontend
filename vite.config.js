import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'pages': '@/pages',
      'assets': '@/assets',
      'common': '@/common',
      'components': '@components',
      'network': '@/network',
      'router': '@/router',
      'styles': '@/styles'
    },
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  }
})

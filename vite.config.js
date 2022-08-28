import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pluginLegacy from "@vitejs/plugin-legacy"

// https://vitejs.dev/config/
const resolvePath = function (str) {
  let pathStr = str ? ('src/' + str) : 'src'
  return path.resolve(__dirname, pathStr);
}
export default defineConfig((command, mode) => {
  console.log('command, mode', command, mode);
  return {
    plugins: [
      vue(),
      pluginLegacy({
        targets: ['defaults', 'not ie 11']
      })
    ],
    resolve: {
      alias: {
        '@': resolvePath(),
        'pages': resolvePath('pages'),
        'assets': resolvePath('assets'),
        'common': resolvePath('common'),
        'components': resolvePath('components'),
        'network': resolvePath('network'),
        'router': resolvePath('router'),
        'styles': resolvePath('styles')
      },
      extensions: ['', '.js', '.ts', '.json', '.vue', '.scss', '.css']
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
  }

})

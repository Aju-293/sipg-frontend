import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
const resolvePath = function (str) {
  let pathStr = str ? ('src/' + str) : 'src'
  return path.resolve(__dirname, pathStr);
}
export default defineConfig(({command, mode}) => {
  console.log(loadEnv(mode, process.cwd()), mode, 'mode')
  
  let options = {};
  if (command == 'build') {
    options.base ='https://aju-293.github.io/sipg-frontend/dist';
    // options.build = {
    //   // outDir: '/dist'
    // }
  } else {
    options.base ='./';
  }
  return {
    ...options,
    plugins: [
      vue()
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

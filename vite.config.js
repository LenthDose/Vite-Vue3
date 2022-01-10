import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }, // 打包路径
  server: {
    port: 8000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/userManage': {
        target: 'http://localhost:8090/userManage',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/userManage/, '')
      },
    }
  }
})

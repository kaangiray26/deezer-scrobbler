import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8000,
        hot: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            'md5': path.resolve(__dirname, 'node_modules/md5'),
        }
    },
})

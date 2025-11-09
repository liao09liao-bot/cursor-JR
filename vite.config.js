import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 設定檔：用於 GitHub Pages 部署
export default defineConfig({
  base: '/cursor-JR/', // 網站部署在 GitHub Pages 的子路徑
  plugins: [react()]
})

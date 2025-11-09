import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cursor-JR/', // ← 根據你的 GitHub 專案名稱設定
  plugins: [react()]
})

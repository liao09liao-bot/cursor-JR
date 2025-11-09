import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cursor-JR/', // ← 這裡一定要對應你的 GitHub 專案名稱
  plugins: [react()]
})

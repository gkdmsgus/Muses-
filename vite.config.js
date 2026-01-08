import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Muses-/", // ← 저장소 이름인 Muses-를 여기에 꼭 넣어주세요!
})
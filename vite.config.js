import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TailwindCSS from '@TailwindCSS/vite'
// import UserForm from '@UserForm/vite'
// import HitungGajiForm from '@HitungGajiForm/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TailwindCSS()
    // UserForm(),
    // HitungGajiForm(),
  ],
})

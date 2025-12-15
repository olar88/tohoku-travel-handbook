import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: '日本東北旅行簿 🍎🦊🌧️',
        short_name: '日本東北旅行簿 🍎🦊🌧️',
        description: 'Your guide to traveling in Tohoku, Japan',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'appIcon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'appIcon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})

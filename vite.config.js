import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'pages/services.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        aboutUs: resolve(__dirname, 'pages/about-us.html'),
        careers: resolve(__dirname, 'pages/careers.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        bookOnline: resolve(__dirname, 'pages/book-online.html'),
        quickCash: resolve(__dirname, 'pages/quick-cash.html'),
      },
    },
  },
})

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { VitePWA } from "vite-plugin-pwa";
import compression from "vite-plugin-compression2";

import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  // Add new server configuration
  server: {
    host: "0.0.0.0",
    port: 4100,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:5055",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "build",
    assetsDir: "@/assets",
    rollupOptions: {},
    chunkSizeWarningLimit: 10 * 1024,
  },

  plugins: [
    react(),
    cssInjectedByJsPlugin(),

    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      includeAssets: ["**/*", "src/assets/img/logo/*.png", "src/assets/img/*.png", "src/assets/img/*.jpeg", "src/assets/img/*.webp", "favicon.ico"],
      manifest: [
        {
          theme_color: "#f69435",
          background_color: "#f69435",
          display: "standalone",
          orientation: "portrait",
          scope: ".",
          start_url: ".",
          id: ".",
          short_name: "ZAPMarketplace - E-Commerce Website",
          name: "ZAPMarketplace : eCommerce Admin Dashboard",
          description: "ZAPMarketplace : Store e-commerce Admin Dashboard",
          icons: [
            {
              src: "favicon.ico",
              sizes: "48x48",
              type: "image/x-icon",
            },
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
            },
            {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      ],
    }),

    compression(),
  ],

  define: {
    "process.env": process.env,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },

  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.js"],
  },
});

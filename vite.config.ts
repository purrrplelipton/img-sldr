import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: "**/*.tsx" })],
  server: {
    port: 3000,
    proxy: { "/api": { target: "http://localhost:3001", changeOrigin: true } },
  },
  preview: {
    port: 8080,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:2]",
    },
  },
});

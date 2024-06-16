import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, PluginOption } from "vite" // Add PluginOption import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./public/assets"),
    },
  },
})

import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { nitro } from "nitro/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"

export default defineConfig({
  plugins: [devtools(), tanstackStart(), nitro(), viteReact(), tailwindcss()],
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
})

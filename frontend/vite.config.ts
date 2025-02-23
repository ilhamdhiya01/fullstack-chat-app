// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5173",
        changeOrigin: true,
      },
    },
    hmr: {
      host: "localhost",
    },
    allowedHosts: ["localhost", ".ngrok-free.app"],
  },
  preview: {
    host: true,
    port: 5173,
  },
  build: {
    target: "esnext",
  },
});

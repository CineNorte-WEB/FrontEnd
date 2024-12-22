import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 개발 서버 포트 고정
    host: "localhost", // localhost로 강제 설정
    proxy: {
      "/v2/maps/sdk.js": {
        target: "https://dapi.kakao.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/v2\/maps\/sdk.js/, "/v2/maps/sdk.js"),
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 개발 서버 포트 고정
    host: "localhost", // localhost로 강제 설정
    proxy: {
      // Kakao API 프록시
      "/v2/maps/sdk.js": {
        target: "https://dapi.kakao.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/v2\/maps\/sdk.js/, "/v2/maps/sdk.js"),
      },
      // 백엔드 API 프록시 추가
      "/api": {
        target: "http://3.36.90.46:8080", // 백엔드 서버 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // "/api" 제거
      },
    },
  },
});

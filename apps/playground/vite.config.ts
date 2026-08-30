import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    target: "esnext",
  },
});

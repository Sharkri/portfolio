import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sharkri.github.io/portfolio",
  plugins: [react(), imagetools()],
});

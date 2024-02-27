import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Adjust if your app is served from a subdirectory
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.Node_ENV === 'production' ? '/week6_hw/' : '/',
  plugins: [react()],
});

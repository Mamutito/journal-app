import { defineConfig } from "vite";
import dns from "node:dns";
import react from "@vitejs/plugin-react";
dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

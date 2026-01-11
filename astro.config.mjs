// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mtrivedilu.github.io",
  base: "/Sudbury_Temple_Website",
  vite: {
    plugins: [tailwindcss()],
  },
});

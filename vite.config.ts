import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteFonts from "vite-plugin-fonts";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

// todo: add todo onder routine loggen
// todo: iocns in pwa aanmaken en manifest file bekijken
// todo: npm run build proberen

const pwaOptions: Partial<VitePWAOptions> = {
  mode: "development",
  base: "/",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["/favicon.png"],
  strategies: "injectManifest",
  manifest: {
    name: "Last done",
    short_name: "Last done",
    theme_color: "#ffffff",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    icons: [
      {
        src: "icon-192.png",
        sizes: "public/icon-192x192.png",
        type: "image/png",
      },
      {
        src: "public/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "public/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(pwaOptions),
    ViteFonts({
      google: {
        families: ["Atkinson Hyperlegible"],
        preconnect: true,
        display: "swap",
      },
    }),
  ],
  server: {
    port: 8888,
    https: true,
  },
});

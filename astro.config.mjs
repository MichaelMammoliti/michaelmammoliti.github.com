import react from "@astrojs/react";
import { defineConfig } from "astro/config";

const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;
const mode = isDev ? "development" : "production";

import pkg from "./package.json";

console.log("========================");
console.log("Running in mode:", mode);
console.log("========================");

// https://astro.build/config
export default defineConfig({
  site: "https://www.ghostwriterlab.it",
  base: "/",
  publicDir: "public",
  outDir: "dist",
  trailingSlash: "never",
  vite: {
    css: {
      modules: {
        scopeBehaviour: "local",
        generateScopedName: isProd
          ? "[hash:base64:5]"
          : "[name]__[local]___[hash:base64:5]",
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@styles/globals.scss' as *;

`,
        },
      },
    },
    define: {
      "import.meta.env.VERSION": JSON.stringify(pkg.version),
    },
    resolve: {
      alias: {
        "@": "/src",
        "@hooks": "/src/hooks",
        "@components": "/src/components",
        "@pages": "/src/pages",
        "@portals": "/src/portals",
        "@types": "/src/types",
        "@styles": "/src/styles",
        "@analytics": "/src/analytics",
        "@utilities": "/src/utilities",
      },
    },
  },
  integrations: [react()],
  extends: "astro/tsconfigs/strict",
  include: [".astro/types.d.ts", "**/*"],
  exclude: ["dist"],
  compilerOptions: {
    jsx: "react-jsx",
    jsxImportSource: "react",
  },
});

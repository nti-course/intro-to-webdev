import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        quietDeps: true,
      },
    },
  },
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
};

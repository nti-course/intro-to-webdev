import { resolve } from "path";
import { globSync } from "glob";

const htmlFiles = globSync("src/**/*.html");
const input = htmlFiles.reduce((acc, file) => {
  const key = file.replace("src/", "").replace(".html", "");
  acc[key] = resolve(__dirname, file);
  return acc;
}, {});

console.log(input);

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
    publicDir: "./public",
    rollupOptions: { input },
  },
  server: {
    port: 8080,
  },
};

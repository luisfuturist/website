import vue from "@vitejs/plugin-vue";
import path from "path";

export default {
    root: "./src/",
    publicDir: "./assets/",
    resolve: {
        alias: {
            "@": path.resolve("./src/"),
        },
    },
    css: {
        preprocessorOptions: {
            stylus: {
                additionalData: `@import "lfds-tokens/dist/lfds-tokens.styl";`,
            },
        },
    },
    plugins: [
        vue(),
    ],
    build: {
        outDir: "../dist/",
    },
};
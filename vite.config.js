import vue from "@vitejs/plugin-vue";

export default {
    root: "./src/",
    publicDir: "./assets/",
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
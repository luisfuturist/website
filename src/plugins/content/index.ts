import { Plugin } from "vue";
import { vContent } from "./directives/v-content";

export const contentPlugin: Plugin = {
    install(app, ...options) {
        app.directive("content", vContent);
    },
};
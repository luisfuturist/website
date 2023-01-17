import { Plugin } from "vue";
import { useContent } from "./composables/useContent";
import { vContent } from "./directives/v-content";

export type ContentPluginOptions = {
    availableLangs?: Array<string>,
    defaultLang?: string,
};

export const contentPlugin: Plugin = {
    install(app, options: ContentPluginOptions) {
        const { setAvailableLangs, setDefaultLang } = useContent();
        setAvailableLangs(options.availableLangs || ["en"]);
        setDefaultLang(options.defaultLang || "en");

        app.directive("content", vContent);
    },
};
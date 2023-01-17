import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { contentPlugin } from "./plugins/content";
import { useRouteLang } from "./plugins/content/composables/useRouteLang";
import { getRoutes } from "./routes";

export const router = createRouter({
    history: createWebHistory(),
    routes: getRoutes(),
});
const { handleLangSpec } = useRouteLang(router);
router.beforeEach(guard => handleLangSpec(guard));

const app = createApp(App);
app.use(contentPlugin, {
    availableLangs: [ "en" , "pt" ],
    defaultLang: "en",
});
app.use(router);
app.mount(document.getElementById("app"));
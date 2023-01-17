import { RouteRecordRaw } from "vue-router";
import { useUserPrefLang } from "./plugins/content/composables/useUserPrefLang";
import Home from "./views/Home.vue";

const { getUserPrefLang } = useUserPrefLang();

export const getRoutes = () => [
    { path: "/", redirect: () => ({ name: getUserPrefLang().value }), name: 'home' },
    { path: "/pt", component: Home, name: 'pt' },
    { path: "/en", component: Home, name: 'en' },
    { path: "/:catchAll(.*)", redirect: { name: 'home' } },
] as Array<RouteRecordRaw>;
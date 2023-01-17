import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserPrefLang } from "./plugins/content/composables/useUserPrefLang";
import Home from "./views/Home.vue";

const { setDefaultLang, getMainLang } = useUserPrefLang();
setDefaultLang("en");

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/" + getMainLang() },
    { path: "/pt", component: Home },
    { path: "/en", component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
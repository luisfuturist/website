import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useInitialLang } from "./composables/useInitialLang";
import Home from "./views/Home.vue";

const { initialLang } = useInitialLang();

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/" + initialLang },
    { path: "/pt", component: Home },
    { path: "/en", component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
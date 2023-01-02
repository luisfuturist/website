import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import { useInitialLang } from "./composables/useInitialLang";

const { initialLang } = useInitialLang();

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/" + initialLang },
    { path: "/:lang", component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
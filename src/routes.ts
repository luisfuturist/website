import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import { getDefaultLang } from "./utils/getDefaultLang";

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/" + getDefaultLang() },
    { path: "/:lang", component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
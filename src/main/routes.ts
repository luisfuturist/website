import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";

function getDefaultLang() {
    let defaultLang = "en";

    let browserLang = navigator.language;

    if(browserLang.startsWith("pt-")) {
        defaultLang = "pt";
    }
    return defaultLang;
}

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/" + getDefaultLang() },
    { path: "/:lang", component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
import { computed } from "vue";
import { Router, useRoute } from "vue-router";
import { content, defaultLang, f, langsAvailable, SimpleLangType } from "../content/content";
import { toCamel } from "../utils/toCamel";
import { useUserPrefLang } from "./useUserPrefLang";

export function translate(langsAvailable: string[], lang: string, obj: object) {
    lang = toCamel(lang);

    if(!langsAvailable.includes(lang)) {
        lang = defaultLang;
    }

    let text = obj[lang];
    if(text === undefined) text = "NO_TRANSLATION_FOUND";

    return text;
}

export function useContent() {
    const route = useRoute();
    const lang = computed<string>(() => {
        const langId = getLangByPathname(route.path);
        return langId as string;
    });

    const curContent = computed(() => {
        const tl = (obj: object) => translate(langsAvailable, lang.value, obj);
        const factory = (en: any, pt: any) => f(tl, en, pt);
        return content(tl, factory, lang.value as SimpleLangType);
    });
    
    return curContent;
}

export const getLangByPathname = (path = location.pathname) => {
    let langId = path;

    if(path.includes("-")) {
        langId = path.split("-")[0];
    }

    return langId.replace("/", "");
};

export function getRouteByPath(langId, path = location.pathname) {
    if(!path.includes("-")) {
        return langId;
    }

    const route = langId + path.replace("/", "")
        .slice(langId.length, path.length);

    return route;
}

export function useCurLang(router: Router) {
    const setCurLang = (langId: string) => {
        const { setUserPrefLang } = useUserPrefLang();
        let route = getRouteByPath(langId);

        router.push(route);
        setUserPrefLang(langId);
    };

    return {
        setCurLang,
    };
}
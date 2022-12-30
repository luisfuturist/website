import { computed } from "vue";
import { useRoute } from "vue-router";
import { content, f, langsAvailable, defaultLang, SimpleLangType } from "../content/content";
import { toCamel } from "../utils/toCamel";

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
    const lang = computed<string>(() => route.params.lang as string);

    const curContent = computed(() => {
        const tl = (obj: object) => translate(langsAvailable, lang.value, obj);
        const factory = (en: any, pt: any) => f(tl, en, pt);
        return content(tl, factory, lang.value as SimpleLangType);
    });
    
    return curContent;
}
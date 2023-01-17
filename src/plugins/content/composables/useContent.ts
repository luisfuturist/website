import { ref } from "vue";
import { useUserPrefLang } from "./useUserPrefLang";

const defaultLang = ref(null);
const availableLangs = ref(null);

export function useContent() {
    const t = (obj: object) => {
        if(!obj) {
            return;
        }
    
        if(typeof obj === "string") {
            return obj;
        }

        const { getUserPrefLang } = useUserPrefLang();
        const langId = getUserPrefLang().value;
        
        return obj[langId] || "CONTENT_NOT_FOUND";
    };

    const setAvailableLangs = (langs: Array<string>) => {
        availableLangs.value = langs;
    }

    const setDefaultLang = (langId: string) => {
        defaultLang.value = langId;
    };

    return {
        t,
        availableLangs,
        setAvailableLangs,
        defaultLang,
        setDefaultLang,
    };
}
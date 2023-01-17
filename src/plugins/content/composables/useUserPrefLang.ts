import { ref } from "vue";
import { useContent } from "./useContent";

const userPrefLang = ref(localStorage.getItem("lang"));

export function useUserPrefLang() {
    let browserIsoCode = navigator.language;
    const browserLangCode = browserIsoCode.split("-")[0];

    const setUserPrefLang = (langId: string) => {
        localStorage.setItem("lang", langId);
        userPrefLang.value = langId;
    };

    const getUserPrefLang = () => {
        if(!userPrefLang.value) {
            const { defaultLang, availableLangs } = useContent();
            let langId = localStorage.getItem("lang");

            if(!langId) {
                langId = browserLangCode;
            }
            
            if(!availableLangs.value?.includes(langId)) {
                langId = defaultLang.value;
            }

            setUserPrefLang(langId);
        }

        return userPrefLang;
    }

    const seeLang = (langId: string) => {
        userPrefLang.value = langId;
    };

    return {
        userPrefLang,
        getUserPrefLang,
        setUserPrefLang,
        seeLang,
        browserLangCode,
    };
}
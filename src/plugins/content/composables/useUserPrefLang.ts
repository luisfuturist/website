import { ref } from "vue";

const defaultLang = ref(null);
const userPrefLang = ref(localStorage.getItem("lang"));

export function useUserPrefLang() {
    const browserIsoCode = navigator.language;
    const langCode = browserIsoCode.split("-")[0];

    const setUserPrefLang = (langId: string) => {
        localStorage.setItem("lang", langId);
        userPrefLang.value = langId;
    };

    const setDefaultLang = (langId: string) => {
        defaultLang.value = langId;
    };

    const getMainLang = () => {
        if(userPrefLang.value) {
            return userPrefLang.value;
        }

        setUserPrefLang(defaultLang.value);
    
        return langCode;
    };

    return {
        defaultLang,
        setDefaultLang,
        userPrefLang,
        setUserPrefLang,
        browserLangCode: langCode,
        getMainLang,
    };
}
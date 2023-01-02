
import { useUserPrefLang } from '../composables/useUserPrefLang';
const { userPrefLang } = useUserPrefLang();

export function useInitialLang() {
    if(userPrefLang.value) {
        return {
            initialLang: userPrefLang.value,
        };
    }

    let defaultLang = "en";

    let browserLang = navigator.language;

    if(browserLang.startsWith("pt-")) {
        defaultLang = "pt";
    }

    return {
        initialLang: defaultLang,
    };
}
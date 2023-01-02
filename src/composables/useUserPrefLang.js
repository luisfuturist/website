import { ref } from "vue";

const userPrefLang = ref(localStorage.getItem("lang"));

export function useUserPrefLang() {
    function setUserPrefLang(lang) {
        localStorage.setItem("lang", lang);
        userPrefLang.value = lang;
    }

    return {
        userPrefLang,
        setUserPrefLang,
    };
}
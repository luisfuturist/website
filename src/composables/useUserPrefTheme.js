import { ref } from "vue";

const userPrefTheme = ref(localStorage.getItem("theme"));

export function useUserPrefTheme() {
    function setUserPrefTheme(theme) {
        localStorage.setItem("theme", theme);
        userPrefTheme.value = theme;
    }

    return {
        userPrefTheme,
        setUserPrefTheme,
    };
}
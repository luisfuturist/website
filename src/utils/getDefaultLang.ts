export function getDefaultLang() {
    let defaultLang = "en";

    let browserLang = navigator.language;

    if(browserLang.startsWith("pt-")) {
        defaultLang = "pt";
    }
    return defaultLang;
}
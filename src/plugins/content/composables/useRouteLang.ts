import { Router } from "vue-router";
import { useUserPrefLang } from "./useUserPrefLang";

export function useRouteLang(router: Router) {
    const setRoute = (langId: string) => {
        const { setUserPrefLang } = useUserPrefLang();
        let route = getRouteByPath(langId);

        router.push(route);
        setUserPrefLang(langId);
    };

    const getLangByPathname = (path = location.pathname) => {
        let langId = path;
    
        if(path.includes("-")) {
            langId = path.split("-")[0];
        }
    
        return langId.replace("/", "");
    };
    
    const getRouteByPath = (langId: string, path = location.pathname) => {
        if(!path.includes("-")) {
            return langId;
        }
    
        const route = langId + path.replace("/", "")
            .slice(langId.length, path.length);
    
        return route;
    };

    const getInitialLang = () => {
        const { getMainLang } = useUserPrefLang();
    
        return location.pathname === "/" ?
            getMainLang() :
            getLangByPathname();
    };

    return {
        setRoute,
        getRouteByPath,
        getLangByPathname,
        getInitialLang,
    };
}
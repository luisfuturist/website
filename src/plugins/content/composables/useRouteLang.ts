import { RouteLocationNormalized, Router } from "vue-router";
import { useUserPrefLang } from "./useUserPrefLang";

export function useRouteLang(router: Router) {
    const updateLangAndRoute = (langId: string) => {
        const { setUserPrefLang } = useUserPrefLang();
        setUserPrefLang(langId);
        
        let route = getRouteByPath(langId);
        router.push(route);
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

    const handleLangSpec = (guard: RouteLocationNormalized) => {
        const { getLangByPathname } = useRouteLang(router);
        const langId = getLangByPathname(guard.path);

        const { seeLang } = useUserPrefLang();
        seeLang(langId);
    };

    return {
        updateLangAndRoute,
        getRouteByPath,
        getLangByPathname,
        handleLangSpec,
    };
}
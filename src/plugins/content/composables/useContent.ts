import { useUserPrefLang } from "./useUserPrefLang";

export function useContent() {
    const t = (obj: object) => {
        if(!obj) {
            return;
        }
    
        if(typeof obj === "string") {
            return obj;
        }

        const { userPrefLang } = useUserPrefLang();
        const langId = userPrefLang.value;
        
        return obj[langId] || "CONTENT_NOT_FOUND";
    };

    return {
        t,
    };
}
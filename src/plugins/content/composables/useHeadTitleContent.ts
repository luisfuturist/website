import { watch } from "vue";
import { useContent } from "./useContent";
import { useUserPrefLang } from "./useUserPrefLang";

export function useHeadTitleContent(obj: any) {
    const { t } = useContent();
    const { userPrefLang } = useUserPrefLang();

    watch(userPrefLang, () => {
        const title = t(obj);
    
        if(title) {
            document.title = title;
        }
    });
}
import { computed } from "vue";
import { useContent } from "./useContent";

type CbType = (t?: Function) => string;

export function useComputedContent(cb: CbType) {
    const { t } = useContent();
    const content = computed(() => cb(t));
    
    return { content };
}
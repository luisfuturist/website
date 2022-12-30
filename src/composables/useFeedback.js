import { ref } from "vue";
import { useBlurFocus } from "./useBlurFocus";

export function useFeedback(href, copy) {
    const { blurFocus } = useBlurFocus();

    const isFeedbackVisible = ref(false); 

    function handleClick(e) {
        blurFocus();

        if(copy) {
            e.preventDefault();

            navigator.clipboard.writeText(href);
            isFeedbackVisible.value = true;

            setTimeout(() => {
                isFeedbackVisible.value = false; 
            }, 4000);
        }
    }

    return {
        isFeedbackVisible,
        handleClick,
    }
}
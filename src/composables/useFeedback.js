import { ref } from "vue";
import { useBlurFocus } from "./useBlurFocus";

export function useFeedback(text) {
    const { blurFocus } = useBlurFocus();

    const isFeedbackVisible = ref(false);

    const handleClick = (e) => {
        blurFocus();

        e.preventDefault();

        navigator.clipboard.writeText(text);
        isFeedbackVisible.value = true;

        setTimeout(() => {
            isFeedbackVisible.value = false;
        }, 4000);
    };

    return {
        isFeedbackVisible,
        handleClick,
    };
}
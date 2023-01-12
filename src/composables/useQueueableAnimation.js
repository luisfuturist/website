import { ref } from 'vue';

export function useQueueableAnimation(
    CLOSE_FADE_DELAY = 500,
    OPEN_FADE_DELAY = 500
    ) {
    const selectedIndex = ref(0);
    const indexAfterTransition = ref(0);
    const closing = ref(false);
    const opened = ref(true);
    const queuedIndex = ref(null);

    let openTimer = undefined;
    let closeTimer = undefined;

    const handleQueuedIndex = () => {
        if(!queuedIndex.value) return;
        
        startAnimation(queuedIndex.value);
        queuedIndex.value = null;
    };

    const startOpenAnimation = () => {
        opened.value = true;
        handleQueuedIndex();
    };

    const finishCloseAnimation = () => {
        selectedIndex.value = indexAfterTransition.value;
        opened.value = false;
        closing.value = false;

        openTimer = setTimeout(startOpenAnimation, OPEN_FADE_DELAY);
    };

    const startCloseAnimation = () => {
        closing.value = true;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(finishCloseAnimation, CLOSE_FADE_DELAY);
    };

    const startAnimation = (i) => {
        indexAfterTransition.value = i;

        if(!opened.value) {
            queuedIndex.value = i;
            return;
        }
        
        startCloseAnimation();
    };

    const clearTimers = () => {
        clearTimeout(closeTimer);
        clearTimeout(openTimer);
    };

    return {
        selectedIndex,
        indexAfterTransition,
        queuedIndex,
        closing,
        opened,
        startAnimation,
        startCloseAnimation,
        finishCloseAnimation,
        startOpenAnimation,
        handleQueuedIndex,
        clearTimers,
    };
}
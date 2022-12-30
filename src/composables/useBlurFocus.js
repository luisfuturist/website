export function useBlurFocus() {
    function blurFocus() {
        document.activeElement.blur();
    }

    return {
        blurFocus,
    };
}
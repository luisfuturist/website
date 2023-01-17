import { Directive, watchEffect } from "vue";
import { useContent } from "../composables/useContent";

export const vContent: Directive = {
    created(el, binding, vnode, prevVnode) {
        const { t } = useContent();
        
        watchEffect(() => {
            el.innerHTML = t(binding.value);
        });
    }
};
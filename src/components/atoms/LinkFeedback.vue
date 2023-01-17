<script setup>
import { useComputedContent } from "../../plugins/content/composables/useComputedContent";

const { text } = defineProps({
    text: String,
});

const { content } = useComputedContent(t => ({
    copiedStart: t({ en: "Copied ", pt: "Copiado " }),
    copiedEnd: t({ en: " to clipboard", pt: " para clipboard" }),
}));
</script>

<template>
<div class="feedback">
    {{ content.copiedStart }}
    <span class="feedback-href">
        {{ text }}
    </span>
    {{ content.copiedEnd }}
</div>
</template>

<style scoped lang="stylus">
.feedback-href {
    color: var(--lfds-link-color-normal);
}
</style>
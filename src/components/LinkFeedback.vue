<script setup>
import { computed } from 'vue';
import { useContent } from '../composables/useContent';

const { href } = defineProps({
    href: String,
    isFeedbackVisible: Boolean,
});

const content = computed(() => useContent().value.components.linkFeedback);
</script>

<template>
<div v-show="isFeedbackVisible" class="feedback">
    {{ content.copiedStart }}<span class="feedback-href">{{ href }}</span>{{ content.copiedEnd }}
</div>
</template>

<style scoped lang="stylus">
.feedback {
    position: absolute;
    bottom: 2em;
    cursor: default;

    z-index: 500;

    color: var(--lfds-popover-text-color);
    background: var(--lfds-popover-bg);
    width: max-content;
    border: 1px solid var(--lfds-popover-border-color);
    border-radius: 8px;
    margin: 0;
    padding: 4px 12px;
    box-shadow: var(--lfds-popover-shadow) 0px 8px 24px;
    max-width: 50vw;
    word-break: break-word;
    animation: fadeout 0.5s motion-ease-1;
    animation-delay: 3.5s;

    @media (max-width: 600px) {
        max-width: max-content;
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    &-href {
        color: var(--lfds-link-color-normal);
    }
}
</style>
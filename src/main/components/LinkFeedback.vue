<script setup>
const { href } = defineProps({
    href: String,
    isFeedbackVisible: Boolean,
});
</script>

<template>
<div v-show="isFeedbackVisible" class="feedback">
    Copied <span class="feedback-href">{{ href }}</span> to clipboard.
</div>
</template>

<style scoped lang="stylus">
.feedback {
    position: absolute;
    bottom: 2em;
    cursor: default;

    z-index: 500;

    color: color-gray-7;
    background: color-gray-1;
    width: max-content;
    border: 1px solid color-gray-2;
    border-radius: 8px;
    margin: 0;
    padding: 4px 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        color: color-white;
    }
}
</style>
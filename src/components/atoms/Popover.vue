<script setup>
const { click, toLeft } = defineProps({
    click: Function,
    toLeft: Boolean,
});
</script>

<template>
<div class="popover">
    <slot/>
</div>
</template>

<style scoped lang="stylus">
.popover {
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

    @media (max-width: 900px) {
        right: 0;   
    }

    @media (max-width: 690px) {
        left: 0;
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
}
</style>
  
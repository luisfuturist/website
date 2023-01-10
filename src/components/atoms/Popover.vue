<script setup>
import FadeTransition from '../styles/FadeTransition.vue';

const { click, toLeft, isVisible } = defineProps({
    click: Function,
    toLeft: Boolean,
    isVisible: Boolean,
});
</script>

<template>
<FadeTransition>
    <div class="popover" v-if="isVisible">
        <slot/>
    </div>
</FadeTransition>
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
    word-break: break-word;

    @media (max-width: 900px) {
        right: 0;   
    }

    @media (max-width: 690px) {
        left: 0;
    }
}
</style>
  
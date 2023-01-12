<script setup>
import { onUnmounted, ref } from 'vue';
import { useBlurFocus } from '../../composables/useBlurFocus';
import { useQueueableAnimation } from '../../composables/useQueueableAnimation';

const { blurFocus } = useBlurFocus();

const { labels, isUnboxed } = defineProps({
    labels: Array,
    isUnboxed: {
        type: Boolean,
        default: true,
    },
});
const {
    indexAfterTransition,
    selectedIndex,
    closing,
    startAnimation,
    clearTimers
} = useQueueableAnimation();

const handleClick = (i) => {
    blurFocus();
    startAnimation(i);
};

onUnmounted(() => {
    clearTimers();
})
</script>

<template>
<div class="tab-container" :class="{ isUnboxed }">
    <ul class="tab-header">
        <button
            :id="'tab-btn-' + i"
            class="tab-label"
            :class="{ isActive: indexAfterTransition === i }"
            :disabled="indexAfterTransition === i"
            @click.prevent="handleClick(i)"
            v-for="label, i in labels"
            key="label">
            {{ label }}
        </button>
    </ul>
    <div class="tab-body">
        <template v-for="slot, i in $slots" :key="i">
            <div
                v-if="selectedIndex == i"
                :class="{
                    isClose: closing && selectedIndex == i,
                    isOpen: !closing && selectedIndex == i,
                }">
                <component :is="slot"/>
            </div>
        </template>
    </div>
</div>
</template>

<style scoped lang="stylus">
.isOpen, .isClose {
    animation: fade 0.5s ease 1;
}

.isOpen {
    @keyframes fade-normal {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    animation-name: fade-normal;
}

.isClose {
    opacity: 0;

    @keyframes fade-rev {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    animation-name: fade-rev;
}

.tab-container {
    border: 1px solid var(--lfds-popover-border-color);
    border-radius: 4px;
    padding: 16px;

    &.isUnboxed {
        border: none;
        padding: 0;
    }
}

.tab-header {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    width: 100%;
    position: relative;

    &:after {
        position: absolute;
        content: '';
        bottom: 0px;
        left: 0;
        width: 100%;
        z-index: -1;
        border-bottom: 2px solid var(--lfds-navbar-border-color);
    }
}

.tab-label {
    list-style: none;
    padding-bottom: 4px;
    margin: 0;
    color: var(--lfds-link-color-normal);
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--lfds-navbar-border-color);
    border-top: 2px solid transparent;
    transition: border-color 0.25s ease;

    &:hover {
        cursor: pointer;
        border-bottom-color: var(--lfds-link-color-hover);
    }

    &[disabled] {
        color: var(--lfds-link-color-disabled);
    }

    &:focus {
        outline: none;
        border-top-color: var(--lfds-focus-outline);
    }

    &:active {
        border-top-color: transparent;
    }

    &.isActive {
        border-bottom-color: var(--lfds-link-color-disabled);
        color: var(--lfds-link-color-normal);
    }
}

.tab-body {
    padding: 0px;
    padding-top: 8px;
    color: var(--lfds-section-text);
}
</style>
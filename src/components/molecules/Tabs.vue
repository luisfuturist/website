<script setup>
import { ref } from 'vue';
import { useBlurFocus } from '../../composables/useBlurFocus';

const { blurFocus } = useBlurFocus();

const { labels } = defineProps({
    labels: Array,
});
const labelActive = ref(0);

const handleClick = (i) => {
    blurFocus();
    labelActive.value = i;
}
</script>

<template>
<div class="tab-container">
    <ul class="tab-header">
        <button
            :id="'tab-btn-' + i"
            class="tab-label"
            :class="{ isActive: labelActive === i }"
            v-for="label, i in labels"
            key="label"
            @click.prevent="handleClick(i)">
            {{ label }}
        </button>
    </ul>
    <div class="tab-body">
        <div v-for="label, i in labels">
            <div class="isOpen" v-if="labelActive === i">
                <slot :name="i"/>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="stylus">
.isOpen {
    animation: fade 1s ease 1;

    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }
}

.line {
    width: 100%;
    height: 2px;
    background: red;
}
.tab-container {
    border: 1px solid color-gray-2;
    border-radius: 4px;
    padding: 16px;
}

.tab-header {
    padding: 0;
    margin: 0;
    display: flex;

    &:after {
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        border-bottom: 2px solid color-gray-2;
    }
}

.tab-label {
    list-style: none;
    padding-bottom: 4px;
    margin: 0;
    color: color-white;
    background: transparent;
    border: none;
    border-bottom: 2px solid color-gray-2;
    border-top: 2px solid transparent;
    transition: border-color 0.25s ease;

    &:hover {
        border-bottom-color: color-gray-3;
    }

    &:focus {
        outline: none;
        border-top-color: var(--lfds-focus-outline);
    }

    &:active {
        border-top-color: transparent;
    }

    &.isActive {
        border-bottom-color: color-azure-5;
    }
}

.tab-body {
    padding: 0px;
    padding-top: 8px;
    color: color-gray-7;
}
</style>
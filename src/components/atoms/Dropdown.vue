<script setup>
import { ref } from 'vue';
import { useBlurFocus } from '../../composables/useBlurFocus';
import Icon from "./Icon.vue";
import FadeTransition from "../styles/FadeTransition.vue";

const { options, initialIndex, click, icon, toLeft } = defineProps({
    options: Array,
    initialIndex: Number,
    click: Function,
    icon: String,
    toLeft: Boolean,
});

const isOpen = ref(false);
const currentOption = ref(options[initialIndex]);
const { blurFocus } = useBlurFocus();

const toggleDropdown = () => {
    blurFocus();
    
    isOpen.value = !isOpen.value;
}

const selectOption = (option) => {
    isOpen.value = false;
    currentOption.value = option;

    click(option);
}
</script>

<template>
<div class="container">
    <button class="toggler" @click="toggleDropdown">
        <Icon v-if="icon" :name="icon" class="icon"></Icon>
        <Icon v-if="!isOpen" name="caret-down-fill"/>
        <Icon v-if="isOpen" name="caret-up-fill"/>
    </button>
    <FadeTransition>
        <ul v-if="isOpen" class="menu" :class="{ 'toLeft': toLeft }">
            <li v-for="option in options" :key="option" class="menu-item" @click="selectOption(option)">
                <button class="menu-btn" :disabled="option.id === currentOption.id">{{ option.label }}</button>
            </li>
        </ul>
    </FadeTransition>
    <slot/>
</div>
</template>

<style scoped lang="stylus">
style-focus() {
    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;
    text-decoration: none;

    &:focus {
        outline: 4px solid var(--lfds-focus-outline);
    }

    &:active {
        outline: none;
    }
}

.icon {
    color: var(--lfds-link-color-normal);
    margin-right: 4px;
    transition: color 0.25s motion-ease-1;
}

.container {
    display: inline-block;
    position: relative;
    border-radius: 4px;
}

.toggler {
    background: transparent;
    color: var(--lfds-link-color-normal);
    border: none;
    cursor: pointer;

    transition: color 0.25s motion-ease-1;

    style-focus();

    &:hover {
        color: var(--lfds-link-color-hover);

        .icon {
            color: var(--lfds-link-color-hover);
        }
    }
}

.menu {
    list-style: none;
    padding: 0;
    margin: 0;

    position: absolute;
    width: fit-content;
    top: 100%;
    left: 0;
    right: auto;

    background: var(--lfds-popover-bg);
    border-radius: 0 8px 8px 8px;
    box-shadow: var(--lfds-popover-shadow) 0px 8px 24px;

    &.toLeft {
        left: auto;
        right: 0;
        
        @media (max-width: 600px) {
            top: auto;
            bottom: 32px;
        }
    }

    &-item {
        padding: 8px 16px;
    }

    &-btn {
        display: block;
        color: var(--lfds-link-color-normal);
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;

        style-focus();

        .icon {
            color: var(--lfds-link-color-normal);
        }

        &[disabled] {
            color: var(--lfds-link-color-disabled);
        }
    }
}
</style>
  
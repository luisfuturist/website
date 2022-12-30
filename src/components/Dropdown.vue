<script setup>
import { ref } from 'vue'
import Icon from "./Icon.vue";

const { options, initialIndex, click, icon, toLeft } = defineProps({
    options: Array,
    initialIndex: Number,
    click: Function,
    icon: String,
    toLeft: Boolean,
});

const isOpen = ref(false);
const currentOption = ref(options[initialIndex]);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
}

const selectOption = (option) => {
    isOpen.value = false;
    currentOption.value = option;

    click(option);
}
</script>

<template>
<div class="dropdown">
    <button class="dropdown__toggle" @click="toggleDropdown">
        <Icon v-if="icon" :icon="icon" class="icon"></Icon>
        <Icon v-if="!isOpen" icon="caret-down-fill"/>
        <Icon v-if="isOpen" icon="caret-up-fill"/>
    </button>
    <ul v-if="isOpen" :class="'dropdown__menu ' + (toLeft ? 'toLeft' : '')">
        <li v-for="option in options" :key="option" class="dropdown__menu-item" @click="selectOption(option)">
            <button class="dropdown__menu-btn" :disabled="option.href === currentOption.href">{{ option.label }}</button>
        </li>
    </ul>
</div>
</template>

<style scoped lang="stylus">
style-focus() {
    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;
    text-decoration: none;

    &:focus {
        outline: 4px solid alpha(color-azure-4, 0.1);
    }

    &:active {
        outline: none;
    }
}

.icon {
    color: color-white;
    margin-right: 4px;
}

.dropdown {
    display: inline-block;
    position: relative;

    border-radius: 4px;

    &__toggle {
        background: transparent;
        color: #fff;
        border: none;
        cursor: pointer;

        style-focus();

        &:hover {
            color: color-azure-5;

            .icon {
                color: color-azure-5;
            }
        }
    }

    &__menu {
        position: absolute;
        width: fit-content;
        top: 100%;
        left: 0;

        background: color-gray-1;
        border-radius: 0 8px 8px 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        &.toLeft {
            left: auto;
            right: 0;
        }

        &-item {
            padding: 8px 16px;
        }

        &-btn {
            display: block;
            color: color-gray-7;
            cursor: pointer;
            border: none;
            background: transparent;
            padding: 0;

            style-focus();

            &:hover {
                color: color-azure-5;
            }

            &[disabled] {
                color: color-gray-4;
            }
        }
    }
}
</style>
  
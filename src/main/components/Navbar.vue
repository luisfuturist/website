<script setup>
import { ref } from 'vue';
import Link from "./Link.vue";
import { useBlurFocus } from "../composables/useBlurFocus";

const { blurFocus } = useBlurFocus();
const { logo, name, menu, link } = defineProps({
    logo: String,
    name: String,
    menu: Object,
    link: String,
});

const showMenu = ref(false);

function hideMenu() {
    showMenu.value = false;
}

function toggleMenu() {
    blurFocus();
    showMenu.value = !showMenu.value;
}
</script>

<template>
<nav class="nav">
    <div class="body">
        <div class="header">
            <a class="brand" :href="link" @click="blurFocus">
                <img class="logo" :src="logo" alt="Brand logo">
                <span class="name">{{ name }}</span>
            </a>
            <button class="toggle" @click="toggleMenu">
                <i :class="'togglerIcon bi-' + (showMenu ? 'dash' : 'plus')"/>
            </button>
        </div>
        <ul :class="'menu ' + (!showMenu ? 'isClosed' : '')">
            <li v-for="item in menu" :key="item.name" class="menuItem">
                <Link :label="item.name" :href="item.href" :targetSelf="true" @click="hideMenu" />
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped lang="stylus">
.nav {
    position: sticky;
    top: 0px;
    width: 100%;

    background-color: color-gray-1;
    padding: 16px;
    border-bottom: 1px solid color-gray-2;

    z-index: 1000;
}

.body {
    max-width: 1000px;
    margin: 0 auto;    

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header {
    margin: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    &:focus {
        outline: 4px solid alpha(color-azure-4, 0.1);
    }

    &:active {
        outline: none;
    }
}

.logo {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.name {
    font-size: 18px;
    font-weight: 400;
    color: color-white;
    margin: 0;
}

.menu {
    display: block;
    transition: max-height .5s motion-ease-1;
}

.menuItem {
    display: inline-block;
    margin-inline: 10px;

    &:first-child {
        @media (max-width: 600px) {
            margin-top: 16px;
        }
    }
}

.toggle {
    display: none;
    font-size: 48px;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        color: color-azure-5;
    }

    &:focus {
        outline: 4px solid alpha(color-azure-4, 0.1);
    }

    &:active {
        outline: none;
    }

    isClosed = bi-plus;
    isOpened = bi-dash;

    .{isClosed}, .{isOpened} {
        transition: transform 0.25s ease-in-out;  
    }

    .{isClosed} { transform: rotate(90deg); }
    .{isOpened} { transform: rotate(180deg); }
}
.togglerIcon {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 600px) {
    .body {
        display: block;
    }

    .menu {
        overflow: hidden;
        
        display: flex;
        flex-direction: column;
        max-height: 256px;

        &.isClosed {
            max-height: 0px;
        }
    }

    .menuItem {
        display: flex;
        justify-content: center;
        margin: 0;
        width: 100%;
        padding: 10px;
        border-top: 1px solid #444;
    }

    .toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 2px;
        font-size: 24px;
        
        background-color: transparent;
        color: #fff;
        border: none;
        cursor: pointer;
    }
}
</style>
<script setup>
import { ref } from 'vue';
import Link from "./Link.vue";
import { useBlurFocus } from "../composables/useBlurFocus";
import LanguageSelector from './LanguageSelector.vue';
import ThemeSelector from './ThemeSelector.vue';

const { blurFocus } = useBlurFocus();

const { logo, name, menu, link, logoAlt } = defineProps({
    logo: String,
    name: String,
    menu: Object,
    link: String,
    logoAlt: String,
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
                <img class="logo" :src="logo" :alt="logoAlt">
                <span class="name">{{ name }}</span>
            </a>
            <span class="icons">
                <button class="toggle" @click="toggleMenu">
                    <i :class="'togglerIcon bi-' + (showMenu ? 'dash' : 'plus')"/>
                </button>
            </span>
        </div>
        <ul :class="'menu ' + (!showMenu ? 'isClosed' : '')">
            <li v-for="item in menu" :key="item.name" class="menuItem menuItem-links">
                <Link :label="item.name" :href="item.href" :targetSelf="true" @click="hideMenu" />
            </li>
            <li class="selectors menuItem">
                <ThemeSelector :toLeft="true" class="selector"/>
                <LanguageSelector :toLeft="true" class="selector"/>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped lang="stylus">
.selectors {
    display: flex;    
}

.icons {
    display: flex;
    gap: 4px;
}

.nav {
    position: sticky;
    top: 0px;
    width: 100%;

    background: var(--lfds-navbar-bg);
    padding: 16px;
    padding-bottom: 0px;
    border-bottom: 1px solid var(--lfds-navbar-border-color);

    z-index: 6;
}

.body {
    margin: 0 auto;    

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    @media (max-width: 600px) {
        display: block;
    }
}

.header {
    margin: 0;
    padding-bottom: 16px;

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
        outline: 4px solid var(--lfds-focus-outline);
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
    color: var(--lfds-link-color-normal);
    margin: 0;
}

.menu {
    display: block;
    padding-bottom: 16px;
    transition: height .5s motion-ease-1;

    @media (max-width: 600px) {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -16px;
        margin-top: calc(60px - 16px - 1px);
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: 5;

        background: var(--lfds-body-bg)

        &.isClosed {
            height: 0px;
        }
    }
}

.menuItem {
    display: inline-block;
    margin-inline: 10px;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        margin: 0;
        width: 100%;
        padding: 10px;
        border-top: 1px solid var(--lfds-navbar-border-color);
    }
}

.toggle {
    display: none;
    font-size: 48px;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        color: var(--lfds-link-color-hover);
    }

    &:focus {
        outline: 4px solid var(--lfds-focus-outline);
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

    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 2px;
        font-size: 24px;
        
        background: transparent;
        color: var(--lfds-link-color-normal);
        border: none;
        cursor: pointer;
    }
}
.togglerIcon {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
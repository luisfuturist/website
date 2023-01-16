<script setup>
import Link from "@/components/atoms/Link.vue";
import Brand from "@/components/molecules/Brand.vue";
import LanguageSelector from '@/components/molecules/LanguageSelector.vue';
import ThemeSelector from '@/components/molecules/ThemeSelector.vue';
import { useBlurFocus } from "@/composables/useBlurFocus";
import { useContent } from "@/composables/useContent";
import { useUserPrefTheme } from "@/composables/useUserPrefTheme";
import { computed, ref } from 'vue';
import logoLight from "/logo-light.png";
import logoDark from "/logo.png";

const { userPrefTheme } = useUserPrefTheme();

const contentState = useContent();
const content = computed(() => contentState.value.app.navbar);

const { blurFocus } = useBlurFocus();
const { logo, name, items, link, logoAlt } = defineProps({
    items: Object,
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
            <Brand v-bind="{
                logo: (userPrefTheme === 'dark' ? logoDark : logoLight),
                logoAlt: content.logoAlt,
                name: content.name,
                link: '#',
            }"/>
            <span class="icons">
                <button class="toggle" @click="toggleMenu">
                    <i :class="'togglerIcon bi-' + (showMenu ? 'dash' : 'plus')"/>
                </button>
            </span>
        </div>
        <ul :class="'menu ' + (!showMenu ? 'isClosed' : '')">
            <li v-for="item in items" :key="item.name" class="menuItem menuItem-links">
                <Link :isCsn="true" :href="item.href" :targetSelf="true" @click="hideMenu">
                    {{ item.name }}
                </Link>
            </li>
            <li class="selectors menuItem">
                <ThemeSelector :toLeft="true" class="selector"/>
                <LanguageSelector :toLeft="true" class="selector"/>
            </li>
            <div class="menu-minus">
                <button class="toggle" @click="toggleMenu">
                    <i :class="'togglerIcon bi-' + (showMenu ? 'dash' : 'plus')"/>
                </button>
            </div>
        </ul>
    </div>
</nav>
</template>

<style scoped lang="stylus">
.menu-minus {
    display: flex;
    justify-content: flex-end;
    margin-left: 16px;
    margin-right: calc(16px + 6px);
    padding-bottom: 16px;
}

.selectors {
    display: flex;    
}

.icons {
    display: flex;
    gap: 4px;
}

.nav {
    width: 100%;
    background: var(--lfds-navbar-bg);
    padding: 16px;
    padding-bottom: 0px;
    border-bottom: 1px solid var(--lfds-navbar-border-color);
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

.menu {
    display: block;
    transition: max-height .5s motion-ease-1;

    @media (max-width: 600px) {
        padding: 0;

        position: fixed;
        top: 60px;
        left: 0;
        width: 100vw;
        max-height: 100vh;
        margin-top: calc(-60px);
        overflow: hidden;
        z-index: 5;
        background: var(--lfds-body-bg);
        border-bottom: 1px solid var(--lfds-navbar-border-color);

        &.isClosed {
            max-height: 0px;
            border-bottom: none;
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
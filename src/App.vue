<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import "spongia-css";
import { computed, watch } from "vue";
import { RouterView } from 'vue-router';
import Footer from "./components/organisms/Footer.vue";
import Header from "./components/organisms/Header.vue";
import { useContent } from "./composables/useContent";
import { useUserPrefLang } from "./composables/useUserPrefLang";

const contentState = useContent();
const content = computed(() => contentState.value.app);

watch(contentState, () => {
    const title = contentState.value.views.home.meta.title;

    if(title) {
        document.title = title;
    }
});

const menu = computed(() => {
    const menu = content.value.navbar.menu;
    return Object.keys(menu).map(key => {
        const item = menu[key];
        const { userPrefLang } = useUserPrefLang();
        const langId = userPrefLang.value;
        return { name: item.name, href: `/${langId}#${item.id}` };
    });
});
</script>

<template>
<Header :menu="menu"/>
<RouterView/>
<Footer
    :text="content.footer.text"
    :links="content.footer.links"
/>
</template>

<style lang="stylus">
@import "./themes/dark.styl";
@import "./themes/light.styl";

:root {
    theme-dark();

    body[theme="light"] {
        theme-light();
    }
}

body {
    font-family: 'Roboto', sans-serif;
    background: var(--lfds-body-bg);
}

#app {
    overflow: hidden auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

* {
    font: inherit;
}

*::selection {
    background: var(--lfds-selection-bg);
    color: var(--lfds-selection-color);
}

::-webkit-scrollbar {
	width: 6px;
    z-index: -10;
}

::-webkit-scrollbar-track {
	background-color: var(--lfds-scrollbar-bg);
}

::-webkit-scrollbar-thumb {
	background: var(--lfds-scrollbar-thumb-normal); 
	border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
	background: var(--lfds-scrollbar-thumb-hover);
}
</style>
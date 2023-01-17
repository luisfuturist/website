<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import "spongia-css";
import { computed } from "vue";
import { RouterView } from 'vue-router';
import Footer from "./components/organisms/Footer.vue";
import Header from "./components/organisms/Header.vue";
import { useMenuLinks } from "./composables/useMenuLinks";
import { useUserPrefTheme } from "./composables/useUserPrefTheme";
import { useHeadTitleContent } from "./plugins/content/composables/useHeadTitleContent";
import { useContent } from "./plugins/content/composables/useContent";
import { useUserPrefLang } from "./plugins/content/composables/useUserPrefLang";
import logoLight from "/logo-light.png";
import logoDark from "/logo.png";

useHeadTitleContent({ en: 'Luis Float | Home', pt: 'Luis Float | Início' });
const { userPrefTheme } = useUserPrefTheme();
const { t } = useContent();
const { menuLinks } = useMenuLinks();

const footerLinks = computed(() => [
    { icon: 'twitter', href: 'https://twitter.com/luisfloat' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/luisfloat' },
    { icon: 'github', href: 'https://github.com/luisfloat' },
]);
const menu = computed(() => {
    return Object.keys(menuLinks.value).map(key => {
        const item = menuLinks.value[key];
        const { getUserPrefLang } = useUserPrefLang();
        const langId = getUserPrefLang().value;
        return { name: item.name, href: `/${langId}#${item.id}` };
    });
});
</script>

<template>
<!-- <Topbar :text="t({en: 'Check back soon for updates!', pt: 'Em breve mais atualizações!' })"/> -->
<Header v-bind="{
    logo: (userPrefTheme === 'dark' ? logoDark : logoLight),
    logoAlt: 'Luis Float Logo',
    name: 'Luis Float',
    link: '#',
    menu,
}"/>
<RouterView/>
<Footer v-bind="{
    text: t({ en: 'Design and Code by Luis Float', pt: 'Design e Code por Luis Float' }),
    links: footerLinks,
}"/>
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
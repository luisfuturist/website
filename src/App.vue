<script setup>
import "spongia-css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./views/Home.vue";
</script>

<template>
<Home></Home>
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
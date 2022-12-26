<script setup>
import "spongia-css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./views/Home.vue";
</script>

<template>
<Home></Home>
</template>

<style lang="stylus">
body {
    font-family: 'Roboto', sans-serif;
    background: color-gray-1;
    overflow-x: hidden;
}

* {
    font: inherit;
}

*::selection {
    background: color-gray-2;
    color: color-gray-9;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background-color: color-gray-2;
}

::-webkit-scrollbar-thumb {
	background: color-gray-3; 
	border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
	background: color-azure-5; 
}
</style>
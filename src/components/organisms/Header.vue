<script setup>
import MainNav from "@/components/molecules/MainNav.vue";

const props = defineProps({
    logo: String,
    logoAlt: String,
    name: String,
    link: String,
    menu: Object,
});
</script>

<template>
<header class="header">
    <MainNav v-bind="props" :items="menu"/>
</header>
</template>

<style scoped lang="stylus">
.header {
    position: sticky;
    top: 0px;
    z-index: 6;
}
</style>
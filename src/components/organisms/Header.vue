<script setup>
import MainNav from "@/components/molecules/MainNav.vue";

const { menu } = defineProps({
    menu: Object,
});
</script>

<template>
<header class="header">
    <MainNav :items="menu"/>
</header>
</template>
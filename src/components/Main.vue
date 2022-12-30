<script setup>
import { provide } from 'vue';

provide("section_count", 0);
</script>

<template>
<main class="main">
    <slot/>
</main>
</template>

<style scoped lang="stylus">
.main {
    margin-top: 32px;
    margin-bottom: 64px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
}

h2 {
    margin-top: 16px;
    color: red !important;
}

p {
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
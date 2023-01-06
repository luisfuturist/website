<script setup>
const { title, number } = defineProps({
    title: String,
    number: Number,
});
</script>

<template>
<h1 class="title">
    <span class="number">0{{ number }}</span>
    — {{ title }}
</h1>
</template>

<style scoped lang="stylus">
.title {
    font-size: 32px;
    margin-bottom: 16px;
    color: var(--lfds-section-title);
}

.number {
    font-size: 32px;
    color: var(--lfds-section-number);
    margin-right: 8px;
}
</style>
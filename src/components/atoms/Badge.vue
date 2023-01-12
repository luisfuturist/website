<script setup>
const { text } = defineProps({
    text: String, 
});
</script>

<template>
<span class="badge">
    {{ text }}
</span>
</template>

<style scoped lang="stylus">
.badge {
    color: var(--lfds-badge-color-normal);
    background: var(--lfds-badge-bg);
    font-size: 14px;
    border-radius: 100px;
    padding: 0px 10px;
}
</style>
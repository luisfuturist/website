<script setup>
const { name } = defineProps({
    name: String, 
});
</script>

<template>
<i :class="'bi-' + name" />
</template>
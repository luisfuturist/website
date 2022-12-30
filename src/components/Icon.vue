<script setup>
const { icon } = defineProps({
    icon: String, 
});
</script>

<template>
<i :class="'bi-' + icon" />
</template>
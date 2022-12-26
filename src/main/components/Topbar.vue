<script setup>
const { text } = defineProps({
    text: String,
});
</script>

<template>
<div class="topbar">
    <span>{{ text }}</span>
</div>
</template>

<style scoped lang="stylus">
.topbar {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 8px 16px;
}

span {
    position: relative;
    color: color-gray-5;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background: color-orange-2;
    }
}
</style>
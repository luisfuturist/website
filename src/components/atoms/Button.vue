<script setup>
import classes from "./Button.module.styl";

const { isGhost } = defineProps({
    isGhost: Boolean,
    isTransparent: Boolean,
});
</script>

<template>
<button :class="{
    [classes.isNormal]: !isGhost,
    [classes.isGhost]: isGhost,
    [classes.button]: true,
    [classes.isTransparent]: isTransparent,
    }">
    <slot/>
</button>
</template>
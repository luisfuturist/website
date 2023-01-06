<script setup>
import { useBlurFocus } from '@/composables/useBlurFocus';

const { link, logo, name, logoAlt } = defineProps({
    link: String,
    logo: String,
    logoAlt: String,
    name: String,
});

const { blurFocus } = useBlurFocus();
</script>

<template>
<a class="brand" :href="link" @click="blurFocus">
    <img class="logo" :src="logo" :alt="logoAlt">
    <span class="name">{{ name }}</span>
</a>
</template>

<style scoped lang="stylus">
.brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;
    width: fit-content;

    &:focus {
        outline: 4px solid var(--lfds-focus-outline);
    }

    &:active {
        outline: none;
    }
}

.logo {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.name {
    font-size: 18px;
    font-weight: 400;
    color: var(--lfds-link-color-normal);
    margin: 0;
}
</style>
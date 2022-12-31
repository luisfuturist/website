<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useContent } from '../composables/useContent';
import Dropdown from "./Dropdown.vue";

const content = computed(() => useContent().value.components.languageSelector);

const options = computed(() => [
    { label: content.value.en, href: "en" },
    { label: content.value.pt, href: "pt" },
]);
const indexes = {
    en: 0,
    pt: 1,
};
let initialIndex = indexes[location.pathname.replace("/", "")];

const router = useRouter();

function handleClick(option) {
    router.push(option.href);
}
</script>

<template>
<Dropdown icon="translate" :options="options" :initial-index="initialIndex" :click="handleClick"/>
</template>

<style scoped lang="stylus">

</style>
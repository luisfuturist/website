<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useContent } from '../composables/useContent';
import { useInitialLang } from "../composables/useInitialLang";
import { useUserPrefLang } from '../composables/useUserPrefLang';
import Dropdown from "./Dropdown.vue";

const { initialLang } = useInitialLang();
const { setUserPrefLang } = useUserPrefLang();

const content = computed(() => useContent().value.components.languageSelector);

const options = computed(() => [
    { label: content.value.en, href: "en" },
    { label: content.value.pt, href: "pt" },
]);
const pathname = location.pathname === "/" ?
    initialLang :
    location.pathname.replace("/", "");

console.log(pathname)

const initialIndex = options.value.findIndex(v => v.href === pathname);

const router = useRouter();

function handleClick(option) {
    router.push(option.href);
    setUserPrefLang(option.href);
}
</script>

<template>
<Dropdown icon="translate" :options="options" :initial-index="initialIndex" :click="handleClick"/>
</template>

<style scoped lang="stylus">

</style>
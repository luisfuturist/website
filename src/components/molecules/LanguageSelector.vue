<script setup>
import Dropdown from "@/components/atoms/Dropdown.vue";
import { useContent } from '@/composables/useContent';
import { useInitialLang } from "@/composables/useInitialLang";
import { useUserPrefLang } from '@/composables/useUserPrefLang';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';

const { initialLang } = useInitialLang();
const { setUserPrefLang } = useUserPrefLang();

const content = computed(() => useContent().value.components.languageSelector);

const options = computed(() => [
    { label: content.value.en, id: "en" },
    { label: content.value.pt, id: "pt" },
]);
const pathname = location.pathname === "/" ?
    initialLang :
    location.pathname.replace("/", "");

const initialIndex = options.value.findIndex(v => v.id === pathname);

const router = useRouter();

function handleClick(option) {
    router.push(option.id);
    setUserPrefLang(option.id);
}
</script>

<template>
<Dropdown icon="translate" :options="options" :initial-index="initialIndex" :click="handleClick"/>
</template>

<style scoped lang="stylus">

</style>
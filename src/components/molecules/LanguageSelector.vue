<script setup>
import Dropdown from "@/components/atoms/Dropdown.vue";
import { useCurLang, useContent } from '@/composables/useContent';
import { getInitialLang } from "../../composables/useInitialLang";
import { computed } from '@vue/reactivity';
import { useRouter } from "vue-router";

const content = computed(() => useContent().value.components.languageSelector);

const options = computed(() => [
    { id: "en", label: content.value.en },
    { id: "pt", label: content.value.pt },
]);
const pathname = getInitialLang();
const initialIndex = options.value.findIndex(v => v.id === pathname);
const router = useRouter();

function handleClick(option) {
    const { setCurLang } = useCurLang(router);
    setCurLang(option.id);
}
</script>

<template>
<Dropdown icon="translate" :options="options" :initial-index="initialIndex" :click="handleClick"/>
</template>

<style scoped lang="stylus">

</style>
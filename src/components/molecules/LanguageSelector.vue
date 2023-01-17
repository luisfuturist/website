<script setup>
import Dropdown from "@/components/atoms/Dropdown.vue";
import { computed } from '@vue/reactivity';
import { useRouter } from "vue-router";
import { useRouteLang } from "../../plugins/content/composables/useRouteLang";
import { useContent } from "../../plugins/content/composables/useContent";

const { t } = useContent();
const router = useRouter();
const { setRoute, getInitialLang } = useRouteLang(router);

const options = computed(() => [
    { id: "en", label: t("English", "Inglês") },
    { id: "pt", label: t("Portuguese", "Português") },
]);
const initialIndex = options.value.findIndex(v => v.id === getInitialLang());

function handleClick(option) {
    setRoute(option.id);
}
</script>

<template>
<Dropdown icon="translate" :options="options" :initial-index="initialIndex" :click="handleClick"/>
</template>

<style scoped lang="stylus">

</style>
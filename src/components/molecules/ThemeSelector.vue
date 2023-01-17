<script setup>
import Dropdown from "@/components/atoms/Dropdown.vue";
import { computed, ref } from "vue";
import { useUserPrefTheme } from "../../composables/useUserPrefTheme";
import { useContent } from "../../plugins/content/composables/useContent";

const { t } = useContent();

const options = computed(() => [
    { label: t({ en: 'Dark', pt: 'Escuro' }), id: "dark" },
    { label: t({ en: 'Light', pt: 'Claro' }), id: "light" },
]);

const { userPrefTheme, setUserPrefTheme } = useUserPrefTheme();
const colorScheme = userPrefTheme.value || "dark";

const initialIndex = options.value.findIndex(v => v.id === colorScheme);

const animationDelay = 500;
const animationDelayQty = animationDelay + "ms";
const changingTheme = ref(false);

const updateTheme = (themeId) => {
    document.body.setAttribute("theme", themeId);
};

const initAnimation = (option) => {
    setUserPrefTheme(option.id);
    changingTheme.value = true;
};
const startAnimation = (option) => {
    updateTheme(option.id);
};
const endAnimation = () => {
    changingTheme.value = false;
};

const handleClick = (option) => {
    initAnimation(option);

    setTimeout(() => {
        startAnimation(option);
        
        setTimeout(() => endAnimation(option), animationDelay);
    }, animationDelay);
};

updateTheme(colorScheme);
</script>

<template>
<Dropdown
    icon="palette-fill"
    :options="options"
    :initial-index="initialIndex"
    :click="handleClick">
    <Teleport to="body">
        <div
            class="theme-transition"
            :class="{ 'is-theme-transition-start': (changingTheme) }">
        </div>
    </Teleport>
</Dropdown>
</template>

<style scoped lang="stylus">
@keyframes a-theme {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.theme-transition {
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    background: color-gray-1;
}

.is-theme-transition-start {
    display: block;
    animation: a-theme v-bind(animationDelayQty) ease infinite alternate;
}
</style>
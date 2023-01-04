<script setup>
import { computed, ref } from "vue";
import { useContent } from '../composables/useContent';
import { useUserPrefTheme } from '../composables/useUserPrefTheme';
import Dropdown from "./Dropdown.vue";

const content = computed(() => useContent().value.components.themeSelector);

const options = computed(() => [
    { label: content.value.dark, id: "dark" },
    { label: content.value.light, id: "light" },
]);

const { userPrefTheme, setUserPrefTheme } = useUserPrefTheme();
const colorScheme = userPrefTheme.value || "dark";

const initialIndex = options.value.findIndex(v => v.id === colorScheme);

const animationDelay = 500;
const animationDelayQty = animationDelay + "ms"
const changingTheme = ref(false);

updateTheme(colorScheme);

function updateTheme(themeId) {
    document.body.setAttribute("theme", themeId);
}

function handleClick(option) {
    setUserPrefTheme(option.id);

    changingTheme.value = true;

    setTimeout(() => {
        updateTheme(option.id);

        console.log("start")
        
        setTimeout(() => {
            changingTheme.value = false;

            console.log("end")
        }, animationDelay);
    }, animationDelay);
}
</script>

<template>
<Dropdown icon="palette-fill" :options="options" :initial-index="initialIndex" :click="handleClick">
    <Teleport to="body">
        <div class="theme-transition" :class="{ 'is-theme-transition-start': (changingTheme) }"></div>
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
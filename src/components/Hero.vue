<script setup>
import { useCssModule } from 'vue';

const classes = useCssModule();
const { title, text } = defineProps({
    title: String,
    text: String,
});
</script>

<template>
<div :class="classes.container">
    <div :class="classes.body">
        <p :class="classes.text">{{ text }}</p>
        <h1 :class="classes.title">{{ title }}</h1>
    </div>
</div>
</template>

<style scoped module lang="stylus">
dot-grid() {
    grid-size = 20px;
    
    background: radial-gradient(var(--lfds-pattern-matrix-color) 1px, transparent 1px);
    background-position: 0;
    background-size: grid-size grid-size;

    position: relative;
}

overlay() {
    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        content: '';
        {block}
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: transparent;
    padding-inline: 32px;
    height: 20rem;
    
    dot-grid();
    +overlay() {
        overlay-color = var(--lfds-pattern-matrix-overlay);
        background: radial-gradient(ellipse at top, overlay-color, transparent),
            radial-gradient(ellipse at bottom, overlay-color, transparent);
    };
}

.body {
    max-width: 1000px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    z-index: 1;
}

.title {
    color: var(--lfds-hero-title-color);

    font-size: 64px;
    font-weight: 400;
    margin: 0;

    @media (max-width: 600px) {
        font-size: 48px;
    }
}

.text {
    color: var(--lfds-hero-text-color);
    font-size: 18px;
    margin: 0;
}
</style>
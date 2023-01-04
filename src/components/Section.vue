<script setup>
import { useSectionCount } from "../composables/useSectionCount.js";

const { title, text } = defineProps({
    title: String,
    text: String,
});

let { count } = useSectionCount();
</script>

<template>
<section class="post">
    <div class="post-body">
        <h1 class="title">
            <span class="number">0{{ count }}</span>
            — {{ title }}
        </h1>
        <slot/>
    </div>
</section>
</template>

<style lang="stylus">
html {
  scroll-behavior: smooth;
}

section {
    scroll-margin-top: 73px;
}

.post {
    padding: 16px;
}

.title {
    font-size: 32px;
    margin-bottom: 16px;
    color: var(--lfds-section-title);
}

.number {
    font-size: 32px;
    color: var(--lfds-section-number);
    margin-right: 8px;
}

.post-body {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    padding: 0;

    position: relative;
}

h1, h2 {
    color: var(--lfds-section-title-2);
    font-weight: 400;
}

h1 {
    margin: 0;
}

h2 {
    margin-bottom: 16px;
}

p {
    color: var(--lfds-section-text);
    margin-bottom: 16px;
}

hr {
    margin-top: 32px;
    margin-bottom: 64px;
    border: 2px solid color-gray-2;
}
</style>
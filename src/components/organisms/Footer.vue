<script setup>
import LinkIcon from "@/components/molecules/LinkIcon.vue";
import { useCssModule } from 'vue';

const classes = useCssModule();
const { text } = defineProps({
    text: String,
    links: Array,
});
</script>

<template>
<footer :class="classes.container">
    <div :class="classes.inner">
        <p :class="classes.text">{{ text }}</p>
        <ul :class="classes.links">
            <li v-for="link in links" :key="link.name" :class="classes.link">
                <LinkIcon :href="link.href" :icon="link.icon"/>
            </li>
        </ul>
    </div>
</footer>
</template>

<style module lang="stylus">
.container {
    background: var(--lfds-footer-bg);
    padding: 16px;
}

.inner {
    max-width: 1000px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
}

.text {
    margin: 0;
    color: var(--lfds-footer-text-color);
}

.links {
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    gap: 16px;
}

@media (max-width: 600px) {
    .inner {
        display: block;
    }

    .links {
        margin-top: 16px;
    }

    .link {
        display: block;
        margin: 0;
    }
}
</style>
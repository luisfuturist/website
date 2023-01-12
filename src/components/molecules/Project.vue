<script setup>
import Badge from "../atoms/Badge.vue";
import LinkIcon from "../molecules/LinkIcon.vue";

const { name, description, keywords, website, account } = defineProps({
    name: String,
    description: String,
    keywords: Array,
    website: String,
    account: String,
});
const ghUrl = `https://github.com/${account}/${name}`;
</script>

<template>
<div class="project">
    <h1 class="title">{{ name }}</h1>
    <p class="text">{{ description }}</p>
    
    <div class="badges">
        <Badge :text="keyword" v-for="keyword, i in keywords" :key="i"/>
    </div>

    <div class="links">
        <LinkIcon icon="github" :href="ghUrl"/>
        <LinkIcon v-if="website" icon="globe" :href="website"/>
    </div>
</div>
</template>

<style scoped lang="stylus">
.links {
    display: flex;
    gap: 6px;
}

.badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px; 
}

.project {
    border: 1px solid var(--lfds-navbar-border-color);
    border-radius: 4px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 8px;
}

.title {
    font-size: 16px;
    color: var(--lfds-section-title-2);
}

.text {
    font-size: 14px;
    color: var(--lfds-section-text);
    margin: 0;
}
</style>
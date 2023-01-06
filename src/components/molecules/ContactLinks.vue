<script setup>
import LinkIcon from '@/components/molecules/LinkIcon.vue';

const { items } = defineProps({
    items: Array,
});
</script>

<template>
<div class="contact-links">
    <LinkIcon v-for="link of items" v-bind="link" class="anchor">
        {{ link.label }}
    </LinkIcon>
    <slot/>
</div>
</template>

<style scoped lang="stylus">
.contact-links {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 16px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 8px;
    }
}
</style>
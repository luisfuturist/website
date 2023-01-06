<script setup>
import Icon from '@/components/atoms/Icon.vue';
import Link from '@/components/atoms/Link.vue';

const { href, icon, isButton } = defineProps({
    href: String,
    icon: String,
    isButton: Boolean,
});
</script>

<template>
<Link class="link" :href="href" :has-underline="$slots.default !== undefined" :isButton="isButton">
    <Icon :name="icon" class="icon" :class="{ 'is-alone': $slots.default }"/>
    <slot/>
</Link>
</template>

<style scoped lang="stylus">
.link {
    gap: 4px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 20px;
    
    color: var(--lfds-link-color-normal);
    transition: color 0.25s motion-ease-1;

    &:hover {
        color: var(--lfds-link-color-hover);
    }
}

.icon.is-alone:hover {
    color: var(--lfds-link-color-normal);
}
</style>
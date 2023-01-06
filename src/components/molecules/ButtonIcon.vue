<script setup>
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';

const { text, isGhost, icon, isTransparent } = defineProps({
    text: String,
    isGhost: Boolean,
    icon: String,
    isTransparent: Boolean,
});
</script>

<template>
<Button :is-ghost="isGhost" :is-transparent="isTransparent" class="button">
    <Icon :name="icon" class="icon"/>
    <slot/>
</Button>
</template>

<style scoped lang="stylus">
.button {
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

    &:hover {
        color: var(--lfds-link-color-hover);
    }
}

.button.isNormal .icon {
    color: var(--lfds-bg-color);
}
</style>
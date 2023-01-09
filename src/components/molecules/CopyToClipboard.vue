<script setup>
import Icon from '@/components/atoms/Icon.vue';
import { useFeedback } from '@/composables/useFeedback';
import LinkFeedback from '@/components//atoms/LinkFeedback.vue';
import Popover from '@/components//atoms/Popover.vue';
import ButtonIcon from './ButtonIcon.vue';

const { text, icon } = defineProps({
    text: String,
    icon: String,
});
const { handleClick, isFeedbackVisible } = useFeedback(text);
</script>

<template>
<div class="container">
    <Icon
        :name="icon"
        class="icon"
        :class="{ 'is-alone': $slots.default }"
    />
    <span class="content">
        <slot/>
    </span>
    <ButtonIcon
        icon="clipboard-fill"
        :is-transparent="true"
        @click="handleClick">
    </ButtonIcon>
    <Popover v-show="isFeedbackVisible">
        <LinkFeedback :text="text"/>
    </Popover>
</div>
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

    color: var(--lfds-link-color-normal);
}

.content {
    border-radius: 4px;
    overflow: hidden;
    color: var(--lfds-popover-text-color);
    max-width: 400px;
    padding: 0 4px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overlay-color = var(--lfds-body-bg);
        background: linear-gradient(to right, overlay-color, transparent, transparent, transparent, overlay-color);
    }

    @media (max-width: 600px) {
        max-width: 200px;
    }

    &::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 20px;
    transition: color 0.25s motion-ease-1;
}

.icon.is-alone:hover {
    color: var(--lfds-link-color-normal);
}
</style>
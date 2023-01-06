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
    <slot/>
    <ButtonIcon
        icon="clipboard-fill"
        class="clipboard-icon"
        :is-transparent="true"
        @click="handleClick">
    </ButtonIcon>
    <Popover v-show="isFeedbackVisible">
        <LinkFeedback :text="text"/>
    </Popover>
</div>
</template>

<style scoped lang="stylus">
.clipboard-icon {
    color: var(--lfds-link-color-normal);
    transition: color 0.25s motion-ease-1;

    &:hover {
        color: var(--lfds-link-color-hover);
    }
}
.link {
    gap: 4px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    color: var(--lfds-link-color-normal)
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
<script setup>
import { useCssModule } from "vue";
import { useFeedback } from "../composables/useFeedback";
import Icon from "./Icon.vue";
import LinkFeedback from "./LinkFeedback.vue";

let classes = useCssModule();
const { href, label, ghost, icon, targetSelf, copy } = defineProps({
    href: String,
    label: String,
    ghost: Boolean,
    icon: String,
    targetSelf: Boolean,
    copy: Boolean,
});

classes = {
    ...classes,
    linkBody: [
        classes.linkBody,
        ghost && classes.isGhost,
        label && classes.isLabel,
        icon && classes.isIcon,
    ].join(" "),
    label: [
        classes.label,
        !ghost && classes.anchor,
    ].join(" "),
};

const { handleClick, isFeedbackVisible } = useFeedback(href, copy);
</script>

<template>
<span :class="classes.container">
    <a :href="href" :target="!targetSelf ? '_blank' : ''" @click="handleClick" :class="classes.linkBody">
        <Icon v-if="icon" :icon="icon" :class="classes.icon"/>
        <span :class="classes.label">{{ label }}</span>
    
        <LinkFeedback :href="href" :isFeedbackVisible="isFeedbackVisible"/>
    </a>
</span>
</template>

<style module lang="stylus">
.container {
    display: block;
    width: fit-content;
}

.isGhost {
    background: transparent;
    border: 1px solid var(--lfds-link-color-hover);
    padding: 4px 8px;
    color: var(--lfds-link-color-normal);
    transition: background 0.25s motion-ease-1;
    
    &:hover {
        cursor: pointer;
        background: var(--lfds-link-bg-hover);
    }
}

.linkBody {
    display: flex;
    width: fit-content;

    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;
    text-decoration: none;

    &:focus {
        outline: 4px solid var(--lfds-focus-outline);
    }

    &:active {
        outline: none;
    }
}

.label {
    transition: color 0.25s motion-ease-1;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 20px;
    padding: 2px;
    
    color: var(--lfds-link-color-normal);
    transition: color 0.25s motion-ease-1;

    &:hover {
        color: var(--lfds-link-color-hover);
    }
}

.isIcon.isLabel .icon {
    margin-right: 4px; 

    &:hover {
        color: var(--lfds-link-color-normal);
    }
}

.anchor {
    color: var(--lfds-link-color-normal);
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 2px;
        background: var(--lfds-link-color-hover);
        transition: width motion-duration-xs motion-ease-1;
    }

    &:hover {
        color: var(--lfds-link-color-normal);

        &::after {
            width: 100%;
        }
    }
}
</style>
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
    border: 1px solid color-azure-4;
    padding: 4px 8px;
    color: white;
    transition: background-color 0.25s motion-ease-1;
    
    &:hover {
        cursor: pointer;
        background: alpha(color-azure-4, 0.4);
    }
}

.linkBody {
    display: flex;
    width: fit-content;

    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;
    text-decoration: none;

    &:focus {
        outline: 4px solid alpha(color-azure-4, 0.1);
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
    
    color: color-white;
    transition: color 0.25s motion-ease-1;

    &:hover {
        color: color-azure-5;
    }
}

.isIcon.isLabel .icon {
    margin-right: 4px; 

    &:hover {
        color: color-white;
    }
}

.anchor {
    color: color-white;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 2px;
        background: color-azure-5;
        transition: width motion-duration-xs motion-ease-1;
    }

    &:hover {
        color: color-white;

        &::after {
            width: 100%;
        }
    }
}
</style>
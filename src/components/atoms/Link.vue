<script setup>
import classes from "./Button.module.styl";

const { href, targetSelf, hasUnderline, isButton } = defineProps({
    href: String,
    targetSelf: Boolean,
    isButton: Boolean,
    isGhost: Boolean,
    hasUnderline: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
<a
    :href="href"
    :target="!targetSelf ? '_blank' : ''"
    :class="{
        'link': true,
        'anchor': !isButton,
        'has-underline': hasUnderline && !isButton,
        [classes.button]: isButton,
        [classes.isNormal]: isButton && !isGhost,
        [classes.isGhost]: isButton && isGhost,
    }">
    <slot/>
</a>
</template>

<style scoped lang="stylus">
.link {
    display: flex;
    width: fit-content;
    text-decoration: none;
    
    &:focus {
        outline: 4px solid var(--lfds-focus-outline);
    }

    &:active {
        outline: none;
    }
}

.anchor {
    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;

    transition: color 0.25s motion-ease-1;

    color: var(--lfds-link-color-normal);
    position: relative;

    &.has-underline {
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
            &::after {
                width: 100%;
            }
        }
    }

    &:hover {
        color: var(--lfds-link-color-normal);
    }
}
</style>
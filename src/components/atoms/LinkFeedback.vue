<script setup>
import { computed } from 'vue';
import { useContent } from '@/composables/useContent';

const { text } = defineProps({
    text: String,
});

const contentRef = useContent();
const content = computed(() => contentRef.value.components.linkFeedback);
</script>

<template>
<div class="feedback">
    {{ content.copiedStart }}<span class="feedback-href">{{ text }}</span>{{ content.copiedEnd }}
</div>
</template>

<style scoped lang="stylus">
.feedback-href {
    color: var(--lfds-link-color-normal);
}
</style>
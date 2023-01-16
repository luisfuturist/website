<script setup>
import { computed } from 'vue';
import { useContent } from '../../composables/useContent';
import CopyToClipboard from './CopyToClipboard.vue';
import Tabs from './Tabs.vue';

const contentState = useContent();
const content = computed(() => contentState.value.views.home);
</script>

<template>
<div class="donate-container">
    <Tabs :labels="Object.keys(content.donate.items)" :is-unboxed="true">
        <template #[i] v-for="item, k, i of content.donate.items" :key="i">
            <div class="donate-header">
                <h1 class="title">{{ item.name }}</h1>
            </div>

            <div class="donate-body">
                <div class="donate-key">
                    <h2 class="donate-item-name">{{ content.donate.key }}</h2>
                
                    <CopyToClipboard :label="k" :text="k" class="donate-clip">
                        {{ item.key }}
                    </CopyToClipboard>
                </div>
            </div>
        </template>
    </Tabs>
</div>
</template>

<style scoped lang="stylus">
.qr {
    color: red;
    width: 256px;
    margin: -11px;
}

.donate-container {
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 50vw;

    @media (max-width: 600px) {
        width: 80vw;
    }

    @media (max-width: 1000px) {
        width: 80vw;
    }
}

.donate-header {
    font-size: 24px;
    padding-bottom: 8px;
    
    .title {
        color: var(--lfds-section-title);
    }
}

.donate-body {
    display: flex;
    flex-direction: column;
    gap: 8px;    
}

.donate-key {
    display: flex;

    .donate-item-name {
        color: var(--lfds-section-text);
        margin: 0;
    }
}
</style>
<script setup>
import ButtonIcon from './ButtonIcon.vue';

const { title, onClose, closeable } = defineProps({
    onClose: Function,
    closeable: Boolean,
    title: String,
    open: Boolean,
});

const handleClick = () => {
    onClose();
};
</script>

<template>
<Teleport to="body">
    <Transition>
        <div v-if="open">
            <div class="modal">
                <div class="modal-header">
                    <h1 class="title">{{ title }}</h1>
                    <ButtonIcon
                        icon="x"
                        class="close-icon"
                        :is-transparent="true"
                        @click="handleClick"
                    />
                </div>

                <div class="modal-body">
                    <slot/>
                </div>
            </div>
            <div class="modal-bg" @click="handleClick"/>
        </div>
    </Transition>
</Teleport>
</template>

<style scoped lang="stylus">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.modal-body {
    display: block;
}

.title {
    color: var(--lfds-section-title-2);
    font-size: 16px;
}

.close-icon {
    position: relative;
    right: 0;
    top: 0;
}

.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 1px solid var(--lfds-navbar-border-color);
    background: var(--lfds-popover-bg);
    color: var(--lfds-popover-text-color);

    padding: 16px;
    border-radius: 4px;

    box-shadow: var(--lfds-popover-shadow) 0px 8px 24px;

    z-index: 3000;
}

.modal-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 100vw;
    height: 100vh;
    background: var(--lfds-body-bg);
    opacity: 0.8;
    z-index: 2999;
}
</style>
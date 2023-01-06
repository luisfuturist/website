<script setup>

</script>

<template>
<div class="content">
    <div class="pattern"/>
</div>
</template>

<style scoped lang="stylus">
dot-grid() {
    z-index: 2;
    
    grid-size = 20px;
    
    background: transparent;
    background: radial-gradient(var(--lfds-pattern-matrix-color) 1px, transparent 1px);
    background-position: 0;
    background-size: grid-size grid-size;
}

.content {
    display: flex;
    justify-content: flex-end;
    
    width: 100%;
    height: 10rem;

    margin-top: 64px;

    @media (max-width: 600px) {
        size = calc(100vw - 6px);
        width: size;
        height: size;
        margin: -16px;
        padding: 16px;
    }
}

.pattern {
    overflow: hidden;
    width: 50%;
    height: 100%;

    background: color-gray-1;
    animation: a 2s linear infinite;
    
    position: relative;

    @media (max-width: 600px) {
        animation-duration: 4s;
    } 

    @keyframes a {
        from {
            background-position: 0 0;
        }

        to {
            background-position: 0 100%;
        }
    }

    dot-grid();

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(var(--lfds-pattern-matrix-overlay), transparent);
    }
}
</style>
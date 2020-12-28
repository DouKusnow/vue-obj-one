<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
    }
</script>

<style scoped>
    .tabbar{
        position: fixed;
        display: flex;

        bottom: 0;
        left: 0;
        right: 0;

    }
</style>

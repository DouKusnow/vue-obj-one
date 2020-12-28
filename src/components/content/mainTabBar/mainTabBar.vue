<template>
    <div class="main-tab-bar">
        <tab-bar>
            <bar path="/home">
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-yemian1"></use>
                </svg>
                <svg class="icon" aria-hidden="true" slot="icon-active">
                    <use xlink:href="#icon-index"></use>
                </svg>
                    <div slot="icon-text">首页</div>
            </bar>
            <bar path="/category">
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-category1"></use>
                </svg>
                <svg class="icon" aria-hidden="true" slot="icon-active">
                    <use xlink:href="#icon-category"></use>
                </svg>
                    <div slot="icon-text">分类</div>
            </bar>
            <bar path="/cart">
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
                <svg class="icon" aria-hidden="true" slot="icon-active">
                    <use xlink:href="#icon-che-copy"></use>
                </svg>
                <div slot="icon-text">购物车</div>
            </bar>
            <bar path="/profile">
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-wodedangxuan"></use>
                </svg>
                <svg class="icon" aria-hidden="true" slot="icon-active">
                    <use xlink:href="#icon-wode"></use>
                </svg>
                <div slot="icon-text">我的</div>
            </bar>

        </tab-bar>
    </div>
</template>

<script>
    import TabBar from '../../commit/tabbar/tabbar'
    import Bar from '../../commit/tabbar/bar/bar'
    export default {
        name: "mainTabBar",
        components:{
            TabBar,
            Bar
        }
    }
</script>

<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }


</style>

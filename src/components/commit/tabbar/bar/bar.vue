<template>
    <div class="bar" @click="isClick">
      <div v-if="!activeItem" class="icon"><slot name="icon"></slot></div>
      <div  v-else class="icon-active"><slot name="icon-active"></slot></div>
      <div :style="isActive"><slot name="icon-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "bar",
        props:{
            path: String,
            isActiveColor:{
                String,
                default: 'red'
            }
        },
        methods:{
            isClick(){
                this.$router.replace(this.path)
            }
        },
        computed:{
            activeItem(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            isActive(){
                return this.activeItem ? {color: this.isActiveColor}: {}
            }
        }
    }
</script>

<style scoped>
    .bar{

        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;

    }
</style>

<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot> </div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      fontColor:{
        type:String,
        default:"hotpink"
      }
    },
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!=-1;
      },
      activeStyle(){
        return this.isActive==true?{color:this.fontColor}:{};
      }
    },

    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tar-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*去除图片下方会有的3px距离*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: hotpink;
  }
</style>

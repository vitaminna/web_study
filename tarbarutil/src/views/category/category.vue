<template>
    <div><h2 :style="hStyle">分类</h2></div>
</template>

<script>
    export default {
        name: "category",
      data(){
        return{
          setColor:"red",
          fontSetSize:"80px"
        }
      },
      computed: {
        hStyle() {
           return {color:this.setColor,fontSize:this.fontSetSize}
        }
      }
    }
</script>

<style scoped>

</style>

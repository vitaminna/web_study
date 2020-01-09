<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>

  #tar-bar{
    /*左边0，右边0*，占据整个宽度*/
    display: flex;
    background-color: #F6F6F6;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.1);
  }

</style>

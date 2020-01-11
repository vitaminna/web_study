<template>
    <div class="nav-bar">
      <div><slot name="left"></slot></div>
      <div><slot name="center"></slot></div>
      <div><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.nav-bar{
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1);
}
</style>

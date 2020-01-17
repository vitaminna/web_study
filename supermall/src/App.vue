<template>
  <div id="app">
   <main-tab-bar class="tab" ></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import "assets/css/base.css";
.tab{
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  z-index: 9;
}
</style>

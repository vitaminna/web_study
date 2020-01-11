<template>
  <div id="app">
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import test from 'components/test'
export default {
  name: 'app',
  components: {
    MainTabBar,
    test
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>

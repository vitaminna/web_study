<template>
  <div id="app">
      <h1>this is  a welcome page </h1>
      <router-link  to="/home">home</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

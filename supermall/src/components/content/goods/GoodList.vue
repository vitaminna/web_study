<template>
    <div class="container">
      <good-list-items v-for="item in itemList" :item="item"></good-list-items>
    </div>
</template>

<script>
  import GoodListItems from './GoodListItems'

  export default {
    name: "GoodList",
    components: {
      GoodListItems
    },
    props:{
      itemList:{
        type:Array,
        default() {
          return[]
        }
      }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>

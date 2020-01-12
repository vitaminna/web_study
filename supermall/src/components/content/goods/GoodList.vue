<template>
    <div class="goodlist">
        <good-list-items v-for="item in goods" :item="item"></good-list-items>
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
      goods:{
        type:Array,
        default() {
          return[]
        }
      }
    }
  }
</script>

<style scoped>
.goodlist{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>

<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend_item">
      <a :href="item.link"><img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend_item{
  flex: 1;
}
.recommend_item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>

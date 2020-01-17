<template>
  <div class="item">
    <img :src="item.show.img" @load="loadImage">
    <div class="goodsInfo">
      <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItems",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      loadImage() {
        this.$bus.$emit('loadImage');
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 46%;
    padding-bottom: 10px;
  }

  .item img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsInfo {
    font-size: 14px;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .goodsInfo .price {
    color: var(--color-high-text);
    margin-right: 30px;
  }
  .goodsInfo .collect{
    position: relative;
  }
  .goodsInfo .collect::before{
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    left: -15px;
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>

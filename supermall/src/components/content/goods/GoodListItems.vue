<template>
  <div class="item">
    <img :src="item.show.img">
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
    props:{
      item:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
.item{
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}
.item img{
  width: 100%;
  border-radius: 5px;
}
.goodsInfo{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsInfo .collect{
  position: relative;
}
.goodsInfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>

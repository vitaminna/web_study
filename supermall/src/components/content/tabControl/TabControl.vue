<template>
  <div class="tab-control">
    <div v-for="(item ,index) in titles"
         class="tab-control-item"
         :class="{activeFont:index == currentIndex}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex:0
      }
    },
    props: {
      titles: {
        type: Array,
        defaults() {
          return []
        }
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('getTypeData',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span{
      padding: 5px;

  }
  .activeFont{
    color: var(--color-high-text);
  }
  .activeFont span{
    border-bottom:3px solid var(--color-high-text);
  }
</style>

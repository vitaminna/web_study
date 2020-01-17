<template>
  <div class="container">
      <div v-for="(item,index) in titles" class="item" :class="{active:index==currentIndex}" v-on:click="changeTitle(index)">
        <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex:0,
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
    methods: {
      changeTitle(index) {
        // 我开始用的是switch
        this.currentIndex = index;
        this.$emit('sendChangeItem',index)
      }
    }
  }
</script>

<style scoped>
.container{
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin-bottom: 5px;
}
  .item{
    flex: 1;
  }
  .active span {
    color: var(--color-high-text);
    padding: 5px;
    border-bottom: 2px solid #FF5777;
  }
</style>

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1,
      },
      pullUpLoad: {
        type: Boolean,
        default: true,
      }
    },
    mounted() {
      /**
       * 创建better-scroll对象
       */
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 监听实时位置
        probeType: this.probeType,
        // wrapper内部的点击方法
        click: true,
        // 上拉加载 boolean
        pullUpLoad: this.pullUpLoad
      })
      // 滑动监听
      this.scroll.on('scroll', (postion) => {
        this.$emit('getPostion', postion)
      })
      this.scroll.on('pullingUp',()=>{
        console.log("加载更多");   // 默认只执行一次，修改：
        // 发送网络请求

      })
    },
    methods: {
      /**
       * 返回top，默认是300，不传的话就是300，传了就使用
       * @param x x轴坐标
       * @param y  y轴坐标
       * @param time 过程事件
       */
      backHomeTop(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>

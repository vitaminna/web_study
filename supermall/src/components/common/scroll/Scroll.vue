<template>
  <div class="wrapper" ref="wrapperaa">
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
        default: 3,
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
      this.scroll = new BScroll(this.$refs.wrapperaa, {
        // 监听实时位置
        probeType: this.probeType,
        // wrapper内部的点击方法,button一定可以点击，div必须设置为true
        click: true,
        // 上拉加载 boolean
        pullUpLoad: this.pullUpLoad
      })
      // 滑动监听
      this.scroll.on('scroll', (postion) => {
        this.$emit('getPostion', postion)
      })
      this.scroll.on('pullingUp', () => {
        console.log("加载更多");   // 默认只执行一次，修改：
        this.$emit('pullingUp');
        // 发送网络请求

      })
    },
    methods: {
      /**
       * 这样就会有一定的动画效果
       * 返回top，默认是300，不传的话就是300，传了就使用
       * @param x x轴坐标
       * @param y  y轴坐标
       * @param time 过程事件
       */
      backHomeTop(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      pullUpFinish() {
        this.scroll && this.scroll.finishPullUp();
      },
      myRefresh() {
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>

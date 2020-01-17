<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" @getPostion="getPostion" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-vue></feature-vue>
      <tab-control :titles="titiles" @sendChangeItem="changeItem"></tab-control>
      <good-list :itemList="itemList"></good-list>
    </scroll>
    <back-top @click.native="backTop" :class="{showBackTop:isShow}"></back-top>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from "../../components/common/swiper/Swiper";
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendView from 'views/home/childComps/RecommendView'
  import FeatureVue from 'views/home/childComps/FeatureVue'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'


  import {getHomeMultidata, getHomeData} from 'network/home'


  export default {
    name: "home",
    components: {
      Swiper,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureVue,
      TabControl,
      GoodList,
      BackTop,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titiles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'sell': {page: 0, list: []},
          'new': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: true
      }
    },
    computed: {
      itemList() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeData('pop')
      this.getHomeData('sell')
      this.getHomeData('new')
    },
    mounted(){
      this.$bus.$on('loadImage',()=>{
        this.$refs.scroll.myRefresh();
      })
    },
    methods: {
      /**
       * 点击事件
       */
      debounce(func, delay) {
        let timer = null;
        return function (...args) {
          if (timer) {
            clearTimeout(timer)
          }else{
            timer=setTimeout(()=>{
              func.apply(this,args)
            },delay)
          }
        }
      },
      backTop() {
        // console.log("点击了返回顶部");
        this.$refs.scroll.backHomeTop(0, 0);
      },
      getPostion(postion) {
        // console.log(postion);
        if (-postion.y > 1000) {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
      loadMore() {
        console.log("王红元");
        this.getHomeData(this.currentType)
      },


      /**
       * 数据请求
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }).catch(err => {
          console.log(err);
        })
      },
      getHomeData(type) {
        let page = ++this.goods[type].page;
        getHomeData(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          // this.goods[type].page++;以为前面已经用了自加
          this.$refs.scroll.pullUpFinish()
        }).catch(err => {
          console.log(err);
        })
      },
      changeItem(index) {
        switch (index) {
          case 0: {
            this.currentType = 'pop';
            break
          }
          case 1: {
            this.currentType = 'new';
            break
          }
          case 2: {
            this.currentType = 'sell';
            break
          }


        }
      }
    }
  }
</script>

<style scoped>
  #home {
    /*margin-top: 44px;*/
    position: relative;
    height: 100vh;
  }

  .home-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }

  .content {
    /*background-color: red;*/
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 50px;
  }

  /*也可以使用v-show*/
  .showBackTop {
    display: none;
  }

</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
      <scroll class="content" ref="scroll" :probe-type="3" @getPostion="getPostion">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-vue></feature-vue>
        <tab-control :titles="['流行','新款','新选']" class="tabBarControl" @getTypeData="getTypeData"></tab-control>
        <good-list :goods="sendGoodList"></good-list>
      </scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureVue from './childComps/FeatureVue'


  import {getHomeMultidata, getHomeData} from 'network/home'

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        goodsaaa: {
          pop: {page: 0, list: []},
          news: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        persons: {
          name: "lucy",
          adress: {
            shi: [],
            sheng: []
          }
        },
        isShow:false,
      }
    },
    computed: {
      sendGoodList() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatureVue
    },
    created() {
      //请求多个数据
      this.getHomeMultidata();
      this.getHomeData('pop');
      this.getHomeData('sell');
      this.getHomeData('new');
    },
    methods: {
      /**
       * 一般点击方法
       */
      getTypeData(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
      },
      backTop(postion) {
        // console.log("返回top");
        //返回顶部，通过ref调用子组件的方法，给子组件添加一个ref
        this.$refs.scroll.backHomeTop(0, 0);
      },
      getPostion(postion) {
        // console.log(postion);
        this.isShow=(-postion.y) > 800;
      },

      /**
       * 网络请求方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeData(type) {
        let page = this.goods[type].page + 1;
        getHomeData(type, page).then(res => {
          this.goods[type].list = res.data.list;
          console.log(res.data);
        })
        this.goods[type].page++;
      }

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tabBarControl {
    /*吸顶效果*/
    position: sticky;
    /*距离顶部距离*/
    top: 44px;
    z-index: 9;
  }

  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .middleContent{
    /*overflow: hidden;*/
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*right: 0;*/
    /*left: 0;*/
  }
</style>

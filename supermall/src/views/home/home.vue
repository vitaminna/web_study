<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommeng-view :recommend="recommend"></recommeng-view>
    <feature-vue></feature-vue>
    <tab-control :titles="['流行','新款','新选']" class="tabBarControl"> </tab-control>
    <div>{{goods['pop'].page}}</div>
    <div>{{goodsaaa.news.page}}</div>
    <ul>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
      <li>12345689</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import  TabControl from 'components/content/tabControl/TabControl'


  import  HomeSwiper from './childComps/HomeSwiper'
  import RecommengView from './childComps/RecommendView'
  import FeatureVue  from './childComps/FeatureVue'



  import {getHomeMultidata, getHomeData} from 'network/home'

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommend: [],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodsaaa:{
          pop:{page:0,list:[]},
          news:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        persons:{
          name:"lucy",
          adress:{
            shi:[],
            sheng:[]
          }
        }
      }
    },
    components: {
      NavBar,HomeSwiper,RecommengView,FeatureVue,TabControl
    },
    created() {
      //请求多个数据
      this.getHomeMultidata();
      this.getHomeData('pop');
    },
    methods:{
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeData(type) {
        let page = this.goods[type].page+1;
        getHomeData(type,page).then(res=>{
          this.goods[type].list=res.data.list
          console.log(res.data);
        })
        this.goods[type].page++;
      },
      MygetHomeData() {
        let popPage =this.goodsaaa.pop.page+1
        getHomeData('pop',popPage).then(res=>{
          this.goodsaaa.pop.list =res.data.list;
        })
        this.goodsaaa.pop.page++;
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
  .tabBarControl{
    /*吸顶效果*/
    position: sticky;
    /*距离顶部距离*/
    top:44px;

  }
</style>

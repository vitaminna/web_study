import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const home =()=>import('../components/home');
const about=()=>import('../components/about');
const test=()=>import('../components/test');


const routes =[
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    meta:{
      title:"主页"
    },
    component: home
  },
  {
    path: '/about',
    meta:{
      title:"关于"
    },
    children:[
      {path:'test',component:test,meta:{title:"测试"}}
    ],
    component: about
  }

]
const  router =new Router({
  routes,
  mode: 'history'

})
router.beforeEach((to,from,next)=>{
  console.log(to);
  document.title=to.meta.title;
  next();
})



export default router;

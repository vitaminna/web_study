import Vue from 'vue'
import Vuex from 'vuex'
import  mutations from './mutations'
import actions from './actions'
import  getters from './getters'
import  modelA from './modules/modelA'


// 安装插件
Vue.use(Vuex)

const state ={
  counter:1000,
  students:[
    {id:100,name:"lucy",age:20},
    {id:101,name:"milly",age:10},
    {id:102,name:"tom",age:15},
    {id:103,name:"david",age:16}
  ],
  vitamin:{
    name:'mk',
    age:23
  }
};


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:modelA
  }

})
export default store;

import Vue from 'vue'
import Vuex from 'vuex'
import {DECREMENT, INCREMENT} from "./mutations_types";


// 安装插件
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [INCREMENT](state){
      state.counter++
    },
    [DECREMENT](state){
      state.counter--
    },
    updateInfo(state,age) {
      state.vitamin.age=age;
    }

  },
  actions: {
    asyncUpdatInfo(context, payload) {
      setTimeout(()=>{
          context.commit('updateInfo',payload.age);
          payload.success();
      },1000)
    },
    asyncPromise(context, payload) {
      return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
          context.commit('updateInfo',payload)
          resolve("请求数据ok，返回的结果")
        },1000)
      })
    }
  },
  getters:{
    // 主要注意箭头函数的是使用方法，当只有一个形参，一条处理语句
    getAgeGt20(state){
      return state.students.filter(student =>  student.age>15)
    },
    getAgeMt20:state=>{
      return state.students.filter(function (student) {
        return student.age<15
      })
    },
    // 这里的getetr始终指向的是vuex这个对象中的getters，可以通过其调用其他属性的返回结果，做进一步处理
    getAgeGt(state,getters){
      return  getters.getAgeGt20.length
    },
    // 这个函树的外层函数的返回结果是一个函数，传递参数是被内层函数使用的，
    getAgeGtAge(state,getters){
      return  function (age) {
        return state.students.filter(s=>s.age>age)
        
      }
    }
  },
  modules:{}

})
export default store;

import Vue from 'vue'
import App from './App'
import router from './router'
import  axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL="http://123.207.32.32:8000",

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// http://123.207.32.32:8000/api/w1/home/data?type=sell&page=1
// axios({
//   url:"/home/multidata",
//   method:'get',
// }).then(res=>{
//   console.log(res);
// }),
// axios({
//   url:"/api/w1/home/data?type=sell&page=1",
//   method:'get',
// }).then(res=>{
//   console.log(res);
// }),
// axios({
//   url:"http://123.207.32.32:8000/api/w1/home/data",
//   params:{
//     type:"sell",
//     page:1
//   },
//   method:'get',
// }).then(res=>{
//   console.log(res);
// }),
// axios.all([
//   axios({url:"http://123.207.32.32:8000/api/w1/home/data",params: {type:"sell",page:1}}),
//   axios({url:"http://123.207.32.32:8000/home/multidata"})])
//   .then(results=>{
//     console.log(results[0]);
//     console.log(results[1]);
//   }),
//   axios.all([
//     axios({url:"http://123.207.32.32:8000/api/w1/home/data",params: {type:"sell",page:1}}),
//     axios({url:"http://123.207.32.32:8000/home/multidata"})])
//     .then(axios.spread((res1,res2)=>{
//       console.log(res1);
//       console.log(res2)
//     }))

import {request} from "./network/request";
import {request02} from "./network/request02";
import {request03} from "./network/request03";
import {request04} from "./network/request04";

// request({
//   url:"/home/multidata"
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })
// request02({
//   baseConfig:{
//     url:"/home/multidata"
//   },
//   success:function (res) {
//     console.log(res);
//   },
//   failure:function (err) {
//     console.log(err);
//   }
// })
// request03({
//   url:"/home/multidata"
// })
//   .then(res=>{
//
// })
//   .catch(err=>{
//
//   })

request04({
  url:"/home/multidata"
})
  .then(res=>{
    console.log(res);
  })
  .catch(err=>{
    console.log("相当于请求没发送完整，没带上任何信息");
  })

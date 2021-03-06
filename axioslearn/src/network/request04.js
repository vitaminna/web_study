import axios from 'axios'

export function request04(config) {

    const instance01 = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    })
  instance01.interceptors.request.use(config=>{
    // 请求之前做的相关处理
    // 比如说请求头，在界面显示请求图标，登录携带个人token
      return config;
  },error => {
    // 请求未发送ok
    console.log("123");
  }),
  instance01.interceptors.response.use(res=>{
    return res.data;
    // 服务器返回的结果，
  },err=>{
      // 请求失败的结果，比如说地址错误
    console.log("地址不对，服务器未给出响应");
  })
  return   instance01(config)

}

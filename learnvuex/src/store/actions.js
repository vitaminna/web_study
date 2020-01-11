export default  {
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
}

import  axios from 'axios'

export  function request02(config) {
  const instance01 =axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })
  instance01(config.baseConfig)
    .then(res=>{
        config.success(res)
    })
    .catch(err=>{
        config.failure(err)
    })

}

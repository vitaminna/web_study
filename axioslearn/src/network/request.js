import  axios from 'axios'

export  function request(config,success,failure) {
  const instance01 =axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })
  instance01(config)
    .then(res=>{
      success(res)
    })
    .catch(err=>{
      failure(err)
    })
}


import  {request} from './request'

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}
export function getHomeData(type,page) {
    return request({
      url: "api/hy/home/data",
      params:{
        type,
        page
      }
    })

  
}

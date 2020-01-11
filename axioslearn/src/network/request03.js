import axios from 'axios'

export function request03(config) {
  return new Promise((resolve, reject) => {
    const instance01 = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    })
    instance01(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

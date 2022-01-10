import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 6000
})

// 请求拦截
service.interceptors.request.use(config => {
  // 在这可以添加一些请求头的逻辑,如配置token
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  // 在这可以根据实际后台的响应值去进行判断,如code: 0 或者登录失效跳转到登录页等
  return response.data
}, error => {
  return Promise.reject(error)
})

export default service

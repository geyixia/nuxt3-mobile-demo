/* 封装axios用于发送请求 */

import axios, { AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5',
  timeout: 90000,
})
const request = (config: any) => {
//   if (getToken()) {
//     config.headers['csrf-token'] = getToken()
//   }
  if (config.cType) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return config
}

const requestError = (error: any) => {
  console.error(error)
  return Promise.reject(error)
}

const response = (response: AxiosResponse) => {
  return response.data
}

const responseError = async (error: any) => {
  if (error.response.status === 403) {
    showFailToast('登录过期')
    navigateTo('/login')
    return Promise.reject(error)
  }
  if (error.response.data.code === 400) {
    showFailToast(error.response.data.message)
    return Promise.reject(error)
  }
  if (error.response.status === 500) {
    // No permission
    return Promise.reject(error)
  }
  return Promise.reject(error)
}

service.interceptors.request.use(request, requestError)
service.interceptors.response.use(response, responseError)

export default service
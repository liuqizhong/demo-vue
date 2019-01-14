/*
  ajax 请求函数通用模块：
  返回promise对象
  */

import axios from 'axios'

export default {
    get(url, data = {}){
      return new Promise((resolve, reject) => {
        axios.get(url + parseToGetQueryParams(data))
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    post(url, data = {}){
      return new Promise((resolve, reject) => {
        axios.post(url, data)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
}

/**
 * 将对象转化成get请求参数形式
 */
function parseToGetQueryParams(data) {
  let dataStr = ''
  Object.keys(data).forEach(key => {
    dataStr += key + '=' + data[key] + '&'
  })
  if(dataStr != ''){
    // 去除最后一个&
    dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
    dataStr += '?' + dataStr
  }
  return dataStr
}

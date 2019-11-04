/*
 * @Description: jsonp
 * @Author: HuGang
 * @Date: 2019-11-04 16:28:05
 * @LastEditTime: 2019-11-04 17:14:46
 */
import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var key in data) {
    let value = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${value}`
  }
  return url ? url.substring(1) : ''
}
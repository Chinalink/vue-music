/*
 * @Description: DOM操作
 * @Author: HuGang
 * @Date: 2019-11-04 20:59:21
 * @LastEditTime: 2019-11-04 21:02:52
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
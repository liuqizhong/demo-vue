/*
  后台api接口封装
 */

import ajax from 'ajax'

// 请求路径前缀
const PREFIX_URL = 'http://localhost:4000'

// 1、根据经纬度获取位置详情
export function reqAddress (geohash) {
  return ajax.get(`${PREFIX_URL}/position/${geohash}`)
}

// 2、获取食品分类列表
export const reqFoodTypes = () => ajax.get(PREFIX_URL + '/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax.get(`${PREFIX_URL}/shops`, {longitude, latitude})

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax.get(PREFIX_URL + '/search_shops', {keyword, geohash})

// 5、获取一次性验证码
export const reqCaptcha = () => ajax.get(PREFIX_URL + 'captcha')

// 6、用户名密码登陆
export const reqPwdLogin = (name, pwd, captcha) => ajax.post(PREFIX_URL + '/login_pwd', {name, pwd, captcha})

// 7、发送短信验证码
export function reqSendCode(phone){
  return ajax.get(PREFIX_URL + '/sendcode', {phone})
}

// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax.post(PREFIX_URL + '/login_sms', {phone, code})

// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax.get(PREFIX_URL + '/userinfo')

// 10、用户登出
export const reqLoginout = () => ajax.get('/logout')


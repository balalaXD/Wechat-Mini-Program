const param = require('./utils/util.js').param

//易源接口应用ID https://www.showapi.com/console#/myApp
let appid = 90157;
//接口密钥
let secret = "48b2582e78e0404d984a60c736e8c376";
//GET方式的参数
let querystring = "?" + param({
  showapi_appid: appid,
  showapi_sign: secret
})

// API https://www.showapi.com/api/view/213
//热门榜单访问接口
let hotUrl = "https://route.showapi.com/213-4" + querystring;
//根据歌名、人名查询歌曲接口
let searchByNameUrl = "https://route.showapi.com/213-1" + querystring;
let searchByIdUrl = "https://route.showapi.com/213-2" + querystring;

module.exports = {
  hotUrl,
  searchByNameUrl,
  searchByIdUrl
}
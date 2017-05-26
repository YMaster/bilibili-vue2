// 导入实时计算的数据
const urlParamsFns = require('../public/javascripts/urlParamsFn.js');

// 公共参数
let access_key = "cd8f8ab52d527b5f4cedaac0df78eb92";
let appkey = "1d8b6e7d45233436";
let build = 505000;
let mobi_app = "android";
let platform = "android";
let ts = urlParamsFns.ts;
let sign = urlParamsFns.sign;
// 还有 ts 和 sign，共 7 个

// 首页（推荐页面所需参数）
const indexParams = {
  "idxs": [],
  "login_event": 2,
  "network": "wifi",
  "open_event": "cold",
  "pull": "true",
  "style": 2
};
// let idx = 0;
// let login_event = 2;
// let network = "wifi";
// let open_event = "cold";
// let pull = "true";
// let style = 2;

// 获取主题列表时需要的参数
let actionKey = "appkey";

// 直播主页需要的参数
let _device = "android";
let scale = "xxhdpi";
// 直播推荐主播（全部直播）详情页所需参数
// const liveRoomParams = {
//   "sort": "suggestion",
//   "area_id": 0,
//   "page": 1
// }
let sort = "suggestion";
let area_id = 0;
let page = 1;
// 获取直播详情页的标签所需
let tag = null;

// 游戏所需参数
let uid = 2698485;
let udid = "Hy8dfB4tS3NKL0ooVChJL0wuHSkRdTUFNAJlUmAcag1hE2AHPlZvC20IYwVmFw";
let timestamp = urlParamsFns.timestamp;

// 将所有公共参拼接起来，由于在调用时需要判断，所以使用函数返回值的方法
const allCommonParams = (a, b) => {
  if (a && b) {
    ts = a;
    sign = b;
  }
  return "access_key=" + access_key +
          "&appkey=" + appkey +
          "&build=" + build +
          "&mobi_app=" + mobi_app +
          "&platform=" + platform +
          "&ts=" + ts() +
          "&sign=" + sign();
};

// 直播页所需公共参数
const liveCommonParams = (a, b, hasScale) => {
  let params = null;
  if (a && b) {
    ts = a;
    sign = b;
  }
  params = allCommonParams.call(this, ts, sign) + "&_device=" + _device;
  return params = hasScale ? params + "&scale=" + scale : params;
}
// 直播详情页公共参数
const roomsCommonParams = (a, b) => {
  if(a) sort = a;
  if(b) area_id = b;
  return liveCommonParams() + "&area_id=" + area_id + "&page=" + page + "&sort=" + sort;
};

module.exports = {
  "allCommonParams": allCommonParams,
  "liveCommonParams": liveCommonParams,
  "roomsCommonParams": roomsCommonParams,
  "indexParams": indexParams,
  "actionKey": actionKey,
  "sortInit": "suggestion"
}
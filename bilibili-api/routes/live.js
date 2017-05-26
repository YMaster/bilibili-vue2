const router = require('koa-router')()
const axios = require('axios');
const urlConfig = require('./urlConfig');
const urlParams = require('./urlParams');

// 设定根路径
router.prefix('/live');

let url = null;

// 获取分类数据
router.get('/areas', async(ctx, next) => {
  url = urlConfig.liveArea + "?" + urlParams.liveCommonParams();
  let response = await axios.get(url);
  ctx.body = response.data;
});

router.get('/recommend', async(ctx, next) => {
  let ts = () => {
    return 1495716494
  };
  let sign = () => {
    return "ea1c9fbfb643fb8d09242af086ab4438"
  };
  url = urlConfig.liveRecommend + "?" + urlParams.liveCommonParams.call(this, ts, sign, true);
  let response = await axios.get(url);
  ctx.body = response.data;
});

router.get('/common', async(ctx, next) => {
  let ts = () => {
    return 1495716494
  };
  let sign = () => {
    return "ea1c9fbfb643fb8d09242af086ab4438"
  };
  url = urlConfig.liveCommon + "?" + urlParams.liveCommon.call(this, ts, sign, true);
  let response = await axios.get(url);
  ctx.body = response.data;
});

router.get('/rooms/:id/:sort/:tag?', async(ctx, next) => {
  let area_id = parseInt(ctx.params.id) || 0; // id 确定是进入哪个版块详情页面
  let sort = ctx.params.sort || urlParams.sortInit; // sort 确定信息的分类，推荐、最新、最热
  let tag = ctx.params.tag || ""; // tag 确定在版块中的标签分类
  let area = ["全部", "单机联机", "御宅文化", "网络游戏", "电子竞技", "", "生活娱乐", "放映厅", "", "绘画专区", "唱见舞见", "", "手游直播"];
  url = urlConfig.liveRooms + "?" + urlParams.roomsCommonParams.call(this, sort, area_id)

  if (area_id >= 0 && tag) {
    tag = encodeURI(tag)
    url = urlConfig.liveRooms + "?" + urlParams.roomsCommonParams.call(this, sort, area_id) + "&tag=" + tag;
  }
  let response = await axios.get(url);
  ctx.body = response.data;
  console.log("欢迎进入" + area[area_id]);
});

module.exports = router;
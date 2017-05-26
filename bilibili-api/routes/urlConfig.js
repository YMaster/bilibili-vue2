// 推荐页面(进入主页)
const recommend = "https://app.bilibili.com/x/feed/index";
// 主题分类
const skinList = "http://club.bilibili.com/api/query.skin.list.do";

// 直播
// 直播主页分类
const liveArea = "http://api.live.bilibili.com/AppIndex/areas";
// 推荐主播
const liveRecommend = "http://api.live.bilibili.com/AppNewIndex/recommend";
// 直播主页顶部轮播与各大板块数据
const liveCommon = "http://api.live.bilibili.com/AppNewIndex/common";
// 直播推荐直播详情页（全部直播、更多直播页）
const liveRooms = "http://api.live.bilibili.com/mobile/rooms";
// 直播个把版块的分类
const liveTags = "http://api.live.bilibili.com/AppIndex/tags";

// 追番
// 我的追番
const follow_index_mine = "https://bangumi.bilibili.com/appindex/follow_index_mine";
// 番剧推荐、国产动画推荐、以及两个推广
const follow_index_page = "https://bangumi.bilibili.com/appindex/follow_index_page";

// 分区
const partition = "http://app.bilibili.com/x/v2/show/index";

// 游戏中心
const gameHome = "http://apigame.bilibili.com/app/android/user.home";

module.exports =  {
  "recommend" : recommend,
  "skinList": skinList,
  "liveArea": liveArea,
  "liveRecommend": liveRecommend,
  "liveCommon": liveCommon,
  "liveRooms": liveRooms,
  "liveTags": liveTags,
  "follow_index_mine": follow_index_mine,
  "follow_index_page": follow_index_page,
  "partition": partition,
  "gameHome": gameHome
}
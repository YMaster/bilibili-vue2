const router = require('koa-router')()
const axios = require('axios');
const urlConfig = require('./urlConfig');
const urlParams = require('./urlParams');

// 专有参数
let idxs = urlParams.indexParams.idxs;
let login_event = urlParams.indexParams.login_event;
let pull = urlParams.indexParams.pull;
let style = urlParams.indexParams.style;
let actionKey = urlParams.actionKey;

// 设定根路径
router.prefix('/index');

let url = "";

router.get('/recommend/:status', async (ctx, next) => {
  const status = [];
  let state = ctx.params.status;
  let idx;
  let open_event;

  if(state === "init"){
    idx = 0;
    login_event = 2;
    open_event = "cold";
    pull = true;
  } else if(state === "break") {
    idx = idxs[0];
    login_event = 0;
    open_event = "";
    pull = true;
  } else if(state === "more") {
    idx = idxs[1];
    login_event = 0;
    open_event = "";
    pull = false;
  }
  console.log(idx);
  url = urlConfig.recommend + "?" 
            + urlParams.allCommonParams()
            + "&idx=" + idx
            + "&login_event=" + login_event
            + "&open_event=" + open_event
            + "&pull=" + pull
            + "&style=" + style;
  let response = await axios.get(url);
  ctx.body = response.data;
  idxs[0] = response.data.data[0].idx + 1;
  idxs[1] = response.data.data[response.data.data.length - 1].idx;
});

router.get('/skinList', async (ctx, next) => {
  let ts = () => {return 1495697122};
  let sign = () => {return "1334c31100c23fbe2e2e9b294dd7c6b8"};
  url = urlConfig.skinList + "?"
          + urlParams.allCommonParams.call(this, ts, sign)
          + "&actionKey=" + actionKey;
  let response = await axios.get(url);
  ctx.body = response.data;
  console.log("成功获取app主题数据");
});

module.exports = router;
// 获取一个16进制的随机数
const random = () => {
  return ("" + parseInt(Math.random()*Math.pow(10, 15)).toString(16)).slice(0, 8);
};

// 生成系统现在的时间的秒数
const ts = () => {
  return parseInt(new Date().getTime()/1000);
};

// 随机生成sign参数（一个32位的16进制数，实际B站的sign参数是通过计算得到的，由于不知道算法，因此只能用随机数代替，也因为这个一些接口对sign参数严格的就没办法调用）
const sign = () => {
  return random() + random() + random() + random();
};

// 生成当前时间戳，结果的最后6为为0
const timestamp = () => {
  return (new Date().getTime() + 2 * Math.pow(10, 6)).toString().replace(/\d{6}$/, "000000");
}

module.exports = {
  "ts": ts,
  "sign": sign,
  "timestamp": timestamp
}
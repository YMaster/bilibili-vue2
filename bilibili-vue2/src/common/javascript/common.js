// 滑动函数，参数 (初始位置, 目标位置)
export const linearMove = (dom, distance) => {
  dom.style.transform = 'translate3d(' + distance +', 0, 0)';
};

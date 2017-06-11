import * as url from './urlConfig';
import axios from 'axios';

const getData = (url) => {
  return axios.get(url).then((response) => {
    return response.data;
  });
};

export const recommendApi = {
  init() {
    let recommendUrl = url.index + '/recommend/init';
    return axios.get(recommendUrl).then((response) => {
      return response.data;
    });
    // return getData(url.index + '/recommend/init');
  },
  break () {
    return getData(url.index + '/recommend/break');
  },
  more() {
    return getData(url.index + '/recommend/more');
  }
};

export const skinList = {
  init() {
    return getData(url.index + '/skinList');
  }
};

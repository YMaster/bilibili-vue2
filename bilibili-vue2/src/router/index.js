import Vue from 'vue';
import Router from 'vue-router';
// import Vuex from 'vuex';
import Hello from '@/components/Hello';
import Recommend from '@/components/layer/recommend/recommend';
import Live from '@/components/layer/live/live';
import Chase from '@/components/layer/chase/chase';
import Partition from '@/components/layer/partition/partition';
import Dynamic from '@/components/layer/dynamic/dynamic';
import Find from '@/components/layer/find/find';

Vue.use(Router);
// Vue.use(Vuex);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index/:id',
      component: Hello,
      children: [
        {
          path: 'live',
          component: Live
        },
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'chase',
          component: Chase
        },
        {
          path: 'partition',
          component: Partition
        },
        {
          path: 'dynamic',
          component: Dynamic
        },
        {
          path: 'find',
          component: Find
        },
        {
          path: '',
          redirect: 'recommend'
        }
      ]
    },
    {
      path: '',
      redirect: '/index/layer/recommend'
    }
  ]
});

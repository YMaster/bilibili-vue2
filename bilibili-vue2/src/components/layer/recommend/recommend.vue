<template>
  <div id="recommend">
    <div class="title-wrapper">
      <h2 class="title fl">综合</h2>
      <span class="til-icon"></span>
      <span class="til-icon"></span>
    </div>
    <Banner :banner-item="bannerData" ref="banner"></Banner>
    <videos :videos-list="videos"></videos>
  </div>
</template>

<script>
import Banner from '../../common/banner/banner';
import Videos from '../../common/videos/videos';
import store from '../../../store';
import { mapGetters } from 'vuex';

export default {
  name: 'recommend',
  components: {
    Banner,
    Videos
  },
  store,
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'recommendInit',
      'recommendBreak',
      'recommendMore'
    ]),
    bannerData() {
      let bannerData = this.recommendInit ? this.recommendInit[0] : [];
      return bannerData;
    },
    videos() {
      let arr = this.recommendInit ? this.recommendInit.slice(-10) : [];
      return arr;
    }
  },
  mounted() {
    // 获取初始化数据
    this.$store.dispatch('recommendInit');
    // this.$store.dispatch('recommendBreak');
    // this.$store.dispatch('recommendMore');
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixin';
  
  #recommend
    width 100%
    height 100%
    .title-wrapper
      width 100%
      height 42px
      borderLine(1px, #ccc)
      .title
        display block
        margin 15px 0 0 15px
        font-size 12px
</style>

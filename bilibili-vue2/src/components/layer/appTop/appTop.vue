<template>
  <div id="appTop">
    <div class="top">
      <div class="indexMenu" >
        <div class="menu">
          <indexMenu></indexMenu>
        </div>
        <div class="user-img fl">
          <img src="#" alt="用户头像">
        </div>
        <div class="user-name fl">
          <h2>your一Master</h2>
        </div>
      </div>
    </div>
    <layerNav></layerNav>
  </div>
</template>

<script>
import indexMenu from '../indexMenuIcon/indexMenuIcon';
import layerNav from '../layerNav/layerNav';

export default {
  name: 'appTop',
  components: {
    indexMenu,
    layerNav
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/color'
  @import '../../../common/stylus/mixin'

  #appTop
    width 100%
    height 174px
    background-color: themeColor
    position relative
    box-shadow 0 3px 4px #c5c5c5
    .top
      width 100%
      height 97px
      padding-top 46px
      position relative
      .menu
        position absolute
        top 61px
        left -11px
      .user-img
        width 52px
        height 52px
        margin-left 33px
        border-radius 50%
        img
          width 100%
          height 100%
      .user-name
        padding 16px 0 16px 21px
        h2
          font-size 15px

</style>

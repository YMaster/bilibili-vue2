<template>
  <div id="videoItem">
    <a :href="'//www.bilibili.com/mobile/video/av' + videoData.uri.match(/\d+/) + '.html'">
      <img :src="videoData.cover" height="106" width="170">
      <div class="title">
        <h3>{{videoData.title}}</h3>
      </div>
    </a>
    <videoMsg class="videoMsg" :video-data="videoData"></videoMsg>
  </div>
</template>

<script>
  import videoMsg from './videoMsg';

  export default {
    name: 'videoItem',
    props: {
      videoData: {
        type: Object,
        default: {message: []}
      }
    },
    components: {
      videoMsg
    }
  };
</script>

<style lang="stylus" scoped>
  #videoItem
    width 170px
    height 177px
    margin-left 12px
    margin-top 10px
    float left
    position relative
    background-color #fefefe
    box-shadow 0 0 6px 1px #ccc
    a
      display block
      img
        display block
      .title
        height 28px
        margin 8px 12px
        text-align left
        color #000
        overflow hidden
        text-overflow: ellipsis
        h3
          height 28px
          line-height 14px
          font-size 12px
    .videoMsg
      position absolute
      top 94px
</style>

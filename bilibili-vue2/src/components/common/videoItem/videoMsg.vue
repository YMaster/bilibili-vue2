<template>
  <div id="videoMsg">
    <div>
      <p>观看:{{videoData.play}}, 喜欢:{{videoData.favorite}}, 时长:{{duration}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videoMsg',
    props: {
      videoData: {
        type: Object,
        default: {message: {}}
      }
    },
    computed: {
      duration() {
        return '' + parseInt(this.videoData.duration / 60) + ':' + this.videoData.duration % 60;
      }
    }
  };
</script>

<style lang="stylus">
  #videoMsg
    font-size 12px
</style>

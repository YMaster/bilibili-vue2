<template>
  <div id="recommend">
    <div class="title-wrapper">
      <h2 class="title fl">综合</h2>
      <span class="til-icon"></span>
      <span class="til-icon"></span>
    </div>
    <banner></banner>
  </div>
</template>

<script>
  import Banner from '../../common/banner/banner';

  export default {
    name: 'recommend',
    components: {
      Banner
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
      height 80px
      borderLine(1px, #ccc)
      .title
        display block
        margin 36px 0 0 33px
</style>

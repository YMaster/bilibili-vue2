<template>
  <div id="menu">
    <div class="whiteLine"></div>
    <div class="whiteLine"></div>
    <div class="whiteLine"></div>
  </div>
</template>

<script>
  export default {
    name: 'menu'
  };
</script>

<style lang="stylus" scoped>
  #menu
    width 28px
    height 21px
    .whiteLine
      width 100%
      height 3px
      background-color white
      margin-bottom 6px
      &:nth-of-type(3)
        margin-bottom 0
</style>

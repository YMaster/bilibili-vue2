<template>
  <div id="banner">
    <div class="banner-wrapper">
      <ul>
        <li>
          <a href="">
            <img src="" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
  // import BScroll from 'better-scroll';

  export default {
    name: 'banner',
    methods: {
      _initScroll() {
        console.log(this);
      }
    },
    updated() {
      this._initScroll();
    }
  };
</script>

<style lang="stylus" scoped>
  #banner
    width 100%
    height 165px
    .banner-wrapper
      width 300px
      height 140px
      margin 15px auto 0
      ul
        width 100%
        height 100%
        li
          width 300px
          height 100%
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%

</style>

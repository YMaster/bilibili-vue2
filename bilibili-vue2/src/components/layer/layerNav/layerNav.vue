<template>
  <div id="layerNav" v-cloak>
    <ul>
      <li v-for="(item, index) in list" @click='navDistance(index)'>
        <router-link :to="'/index/layer/' + item.link">{{item.name}}</router-link>
      </li>
    </ul>
    <span class="navSlider" ref="slider"></span>
  </div>
</template>

<script>
  export default {
    name: 'layerNav',
    data() {
      return {
        list: [{
          name: '直播',
          link: 'live'
        }, {
          name: '推荐',
          link: 'recommend'
        }, {
          name: '追番',
          link: 'Chase'
        }, {
          name: '分区',
          link: 'Partition'
        }, {
          name: '动态',
          link: 'dynamic'
        }, {
          name: '发现',
          link: 'find'
        }]
      };
    },
    methods: {
      navDistance(index) {
        // 获取到每个每个标签的宽度
        let itemWidth = window.screen.availWidth / this.list.length;
        let navLeft = (itemWidth - 54) / 2;
        // 使用translate3d开启GPU加速
        this.$refs.slider.style.transform = 'translate3d(' + (itemWidth * index + navLeft) + 'px, 0, 0)';
        // console.log(this.$refs.slider.style.transform);
      }
    },
    mounted() {
      this.navDistance(1);
    }
  };
</script>

<style lang="stylus" scoped>
  #layerNav
    width 100%
    height 66px
    position absolute
    bottom 0px
    ul
      display flex
      width 100%
      height 100%
      li
        flex 1
        box-sizing border-box
        vertical-align middle
        text-align center
        padding-top 22px
        a
          color #fdc6d6
          &.active
            color #fff
    .navSlider
      position absolute
      width 54px
      height 3px
      bottom 0px
      left 0px
      background-color white
</style>

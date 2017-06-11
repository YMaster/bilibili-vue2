<template>
  <div id="banner" ref="banner" v-cloak>
    <div class="banner-wrapper" ref="bannerWrapper">
      <ul ref="ul1">
        <li v-for="item in bannerData">
          <a :href="item.uri">
            <img :src="item.image" ref="img">
          </a>
        </li>
      </ul>
      <ul ref="ul2">
        <li v-for="(item, i) in bannerItem.banner_item" :class="{active: i === pointCount}" ref="point"></li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'banner',
  data() {
    return {
      count: 1,
      interval: null,
      isInit: false,
      paddingTop: '10px',
      imgsNum: 0,
      imgWidth: 0,
      num: 0,
      slider: {
        startX: 0,
        moveX: 0,
        distanceX: 0,
        isMove: false
      }
    };
  },
  props: {
    bannerItem: {
      type: Object,
      default: function () {
        return { message: [] };
      }
    }
  },
  computed: {
    bannerData() {
      let arr = [];
      if (this.bannerItem.banner_item) {
        arr.push(this.bannerItem.banner_item[this.bannerItem.banner_item.length - 1]);
        arr.push.apply(arr, this.bannerItem.banner_item);
        arr.push(this.bannerItem.banner_item[0]);
      }
      return arr;
    },
    pointCount() {
      let count;
      count = this.count - 1;
      if (this.count < 0) {
        count = this.imgsNum - 2;
      } else if (this.count >= this.imgsNum) {
        count = 0;
      }
      return count;
    }
  },
  updated() {
    if (this.isInit) return;  // 如果已经初始化完成就直接结束
    this.isInit = true;
    if (!this.$refs.bannerWrapper) return;  // 判断轮播图是否已经加载完成，如果加载完成则结束
    let imgs = this.$refs.img;
    let imgBox = this.$refs.ul1;
    this.imgsNum = imgs.length;
    this.imgWidth = imgs[0].offsetWidth;
    imgBox.style.width = imgs.length * this.imgWidth + 'px';
    imgBox.style.webkitTransform = 'translate3d(' + (0 - this.imgWidth) + 'px, 0px, 0px)';
    imgBox.style.transform = 'translate3d(' + (0 - this.imgWidth) + 'px, 0px, 0px)';
    this._initScroll();
    this._transitionEnd(imgBox);
    this._touchMove();
  },
  methods: {
    // 判断当前图片的索引然后将图片定位到指定位置以完成无缝轮播
    // Determine the index of the current picture and then position the picture to the specified location to complete the seamless rotation
    _isImgOver() {
      if (this.count >= (this.imgsNum - 1)) {
        this.count = 1;
      } else if (this.count <= 0) {
        this.count = this.imgsNum - 2;
      }
      this._removeTranstion();
      this._setTransform(-this.count * this.imgWidth);
    },
    // 初始化轮播图
    // init banner.
    _initScroll() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.count++;
        this._addTransition();
        this._setTransform(-this.count * this.imgWidth);
      }, 2000);
    },
    // 给当前图片添加渐变属性
    // Add a gradient attribute to the current image.
    _addTransition() {
      this.$refs.ul1.classList.add('active');
    },
    // 移除当前图片的渐变
    // remove gradient attribute from current image.
    _removeTranstion() {
      this.$refs.ul1.classList.remove('active');
    },
    // 平移当前轮播图
    // translate current banner
    _setTransform(distance) {
      this.$refs.ul1.style.webkitTransform = 'translate3d(' + distance + 'px, 0px, 0px)';
      this.$refs.ul1.style.transform = 'translate3d(' + distance + 'px, 0px, 0px)';
    },
    // 每次渐变平移结束，判断当前是否轮播结束
    // Every time the transition event ends, to determine whether the banner is finished playing and doing something.
    _transitionEnd(dom) {
      if (typeof dom === 'object') {
        dom.addEventListener('webkitTransitionEnd', () => {
          this._isImgOver && this._isImgOver();
        });
        dom.addEventListener('transitionEnd', () => {
          this._isImgOver && this._isImgOver();
        });
      }
    },
    _touchMove() {
      let bannerBox = this.$refs.bannerWrapper;
      let imgBox = this.$refs.ul1;
      let that = this;
      bannerBox.addEventListener('touchstart', (e) => {
        clearInterval(that.interval);
        // console.log(window.getComputedStyle(imgBox).transform);
        that.slider.startX = e.touches[0].clientX;
        // console.log(that.startX);
      });
      bannerBox.addEventListener('touchmove', (e) => {
        that.slider.isMove = true;
        that.slider.moveX = e.touches[0].clientX;
        that.slider.distanceX = that.slider.moveX - that.slider.startX;
        // console.log(that.slider.distanceX);
        imgBox.classList.remove('active');
        // 判断滑动的距离
        // if(Math.abs(that.slider.distanceX))
        // if (imgBox.offsetLeft >= 0 && (imgBox.offsetLeft <= bannerBox.offsetHeight)) {
        that._setTransform(-that.count * that.imgWidth + that.slider.distanceX);
        // }
      });
      bannerBox.addEventListener('touchend', (e) => {
        if (Math.abs(that.slider.distanceX) > (that.imgWidth / 3) && that.slider.isMove) {
          if (that.slider.distanceX > 0) {
            that.count--;
          } else {
            that.count++;
          }
          imgBox.classList.add('active');
          that._setTransform(-that.count * that.imgWidth);
        } else {
          imgBox.classList.add('active');
          that._setTransform(-that.count * that.imgWidth);
        }
        that.slider.startX = 0;
        that.slider.moveX = 0;
        that.slider.distanceX = 0;
        that.slider.isMove = false;
        clearInterval(that.interval);
        that._initScroll();
      });
    },
    stopInterval() {
      clearInterval(this.interval);
    }
  },
  // 离开路由时会自动销毁实例，在离开前取消定时器
  beforeDestroy() {
    this.stopInterval();
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/color';

  #banner
    width 100%
    margin-top 10px
    .banner-wrapper
      width 351px
      height 98px
      box-sizing border-box
      border-radius 5px
      border 0.5px solid #ccc
      margin 0 auto
      position relative
      overflow hidden
      ul:nth-of-type(1)
        height 100%
        position absolute
        top 0px
        left 0px
        li
          width 351px
          height 100%
          float left
          a
            display block
            width 100%
            height 100%
            img
              display block
              width 100%
              height 100%
        &.active
          -webkit-transition 0.3s all cubic-bezier(0.3, 0.7, 0.7, 1)
          transition 0.3s all cubic-bezier(0.3, 0.7, 0.7, 1)
      ul:nth-of-type(2)
        position absolute
        bottom 5px
        right 0px
        margin-right 10px
        li
          width 7px
          height 7px
          float left
          border-radius 50%
          margin-right 3px
          background-color #fff
          &.active
            background-color activePoint
</style>

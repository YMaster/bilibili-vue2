<template>
  <div id="hello">
    <appTop></appTop>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appTop from './layer/appTop/appTop';

export default {
  name: 'hello',
  components: {
    appTop
  },
  data() {
    return {
      msg: 'Welcome'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  #hello
    width 100%
    height 100%
    .router
      width 100%
</style>

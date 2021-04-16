<template>
  <div id="app">
    <Header v-if="!$route.meta.isHeaderHide"/>
    <router-view/>
    <!-- 当不是登录或者注册时就显示 -->
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  components:{
    Footer,Header
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>

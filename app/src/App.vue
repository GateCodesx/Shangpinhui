<template>
  <div id="app">
  <Header></Header>
  <!-- 路由组件的出口文件 -->
  <router-view></router-view>
  <TypeNav></TypeNav>
  <!-- 在home,search下是显示的，在login,register是隐藏的 -->
  <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import TypeNav from './components/TypeNav'

export default {
  name: 'App',
  components: {
       Header,Footer,TypeNav
  },
  mounted() {
    //派发一个actions向服务器请求数据，且只请求一次
     this.$store.dispatch("categoryList");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

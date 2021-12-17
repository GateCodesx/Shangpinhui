import Vue from 'vue'
import App from './App.vue'
//注册全局组件，在mainjs里面，整个的项目中都可以使用,一般所有全局组件都放在components中去
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import router from '@/router'
import store from '@/store';
//接口测试1
// import { reqCategoryList } from '@/api';
// reqCategoryList();
//接口测试2
import { reqGetSearchInfo } from "@/api";
console.log(reqGetSearchInfo());
//全局组件注册后需要使用如下方式进行使用,使用此组件的时候不需要引入//
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
    //引入mock中的虚拟数据
import '@/mock/mockServe';
//引入Swiper插件实现轮播图效果。为样式引入
import 'swiper/css/swiper.css';
//Vue.config.productionTip = false
new Vue({
    //注册路由，此处会省略掉k-v的写法
    //注册路由信息，直接写router的时候，组件身上都拥有$route,$router  
    render: h => h(App),
    //在此处进行注册之后
    router,
    //注册仓库，每一个组件实例上会增加一个属性$store
    store,
}).$mount('#app')
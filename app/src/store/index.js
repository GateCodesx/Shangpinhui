//用于创建vuex的状态管理库
import Vue from 'vue';
import Vuex from 'vuex';
//需要使用一下插件，注意Vuex中的大写。
Vue.use(Vuex);
//引入模块化开发的小仓库
import search from '@/store/search';
import home from '@/store/home';

export default new Vuex.Store({
    //对外暴露Vuex的一个实例对象
    //实现vuex仓库数据模块式开发
    modules: {
        search,
        home,
    }

})
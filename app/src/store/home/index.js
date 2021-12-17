// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex)
//创建home的模块化小仓库
import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api'
const state = {

    //state中的数值默认初始值不可以乱写,根据接口的返回值类型进行初始化，是数组就是数组，是对象就是对象
    categoryList: [],
    //轮播图的数据
    bannerList: [],
    //floor中的数据；
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        //传参修改state中的数据等于传进来的数据
        state.categoryList = categoryList;
    },
    //获取轮播图发送来的数据b
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    //修改floorList中的数据
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据。
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        //console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }

    },
    //获取底部floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
};
//计算属性，
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
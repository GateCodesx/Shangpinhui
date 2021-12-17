//创建search模块化开发的
import { reqGetSearchInfo } from "@/api";
const state = {
    //存储search商品搜索中的数据
    searchList: {},
};
const mutations = {
    //修改searchList中的数据
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    //获取search组件的数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
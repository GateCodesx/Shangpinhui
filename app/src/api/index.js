//当前这个模块是为了API的统一进行管理
import requests from "./request";
//引入mock轮播图的请求接口
import mockRequests from './mockRequest';

//三级联动的接口
//  /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () =>
    //axios返回的对象是promise
    requests({ url: "/product/getBaseCategoryList", methods: 'get' })

//banner轮播图的请求接口
export const reqGetBannerList = () =>
    mockRequests.get('/banner')

//floor文件数据的请求接口
export const reqFloorList = () =>
    mockRequests.get('/floor')

//search搜索商品栏组件数据请求接口   接口/api/list   请求方式：post
//此函数需要从外部请求数据，因此需要传参。当前给服务器传递一个默认参数，params至少是一个空对象。  
export const reqGetSearchInfo = (params) =>
    requests({ url: '/list', methods: 'post', data: 'params' })
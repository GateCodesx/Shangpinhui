//用于对axios进行二次封装，axios用于对后台发送数据请求，主要目的是使用请求拦截器和响应拦截器。
import axios from 'axios';
//设置进度条显示需求
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
//使用axios对象的方法create去创造一个axios的实例对象；
const requests = axios.create({
    //配置对象
    //基础路径，
    baseURL: '/mock',
    //设置相应的超时报错的时间，
    timeout: 50000,
});
//请求拦截器，再发出请求之前，可以检测到并进行一些对应的操作
requests.interceptors.request.use((config) => {
    //config配置对象，对象里面又一个属性很重要，headers请求头；
    //进度条开始方法
    nprogress.start();
    return config;

});
//相应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数，服务器相应返回数据，相应拦截器可以进行一些操作
    //进度条结束方法 
    nprogress.done();
    return res.data;

}, (error) => {
    //响应失败的回调函数
    return Promise.reject(error)
});
export default requests;
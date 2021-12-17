// //用于配置路由组件
import Vue from 'vue';
import VueRouter from 'vue-router';
// //vue-router是vue的一个插件，需要使用use方法进行配置
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//重写push和replace方法
//先将VueRouter种所带的push方法复制一份
let originPush = Vue.prototype.push;
let originReplace = Vue.prototype.replace;
//call和apply的相同点，都可以调用函数一次，且都可以改变函数的上下文一次
//call和apply的不同点，call传入多个参数，需要使用都好隔开， 而apply传入的参数是数组的形式 

Vue.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
};
Vue.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this.location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

export default new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            path: '/search/:keyword',
            component: Search,
            meta: { show: true },
            name: 'search',
            //路由组件能不能传递props数据？
            //布尔值的写法
            //props: true,
            //对象写法：额外的给路由组件传递一些props
            //props: { a: 1, b: 2 },
            //函数写法，可以使用params参数，query参数，通过props传递给路由组件。
            //props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.toUpperCase() })

        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false },
        },
        //重定向，在项目运行的时候，访问/,则立马定向到首页
        {
            path: '*',
            redirect: '/home',
        }

    ]
})
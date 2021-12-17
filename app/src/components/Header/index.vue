<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明使的导航必须具有to属性 -->
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //搜索按钮的回调函数，进行页面之间的跳转
    goSearch() {
      //路由传递参数
      //第一种：字符串的形式
      //this.$router.push('./search/'+this.keyword+'?k='+this.keyword.toUpperCase())
      //第二种：模板字符串的形式,模板字符串
      //this.$router.push(`./search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      //采用对象的写法,
      //如果用户先点击了三级联动的右侧栏，在输入参数到搜索框进行搜索
      if(this.$route.query){
        let location={name:'search',params:{keyword:this.keyword}};
        location.query=this.$route.query;
        this.$router.push(location);
      }

      //相关的面试题，关于路由传参
      //问题1 关于路由传参的对象写法中path是否可以结合params参数一起使用？
      //答:不可以一起使用，使用对象写法的时候此时可以用name或者是path，但是path和params不可以一起混合使用
      //this.$router.push({path:'/search',params:{keywod:this.keryword},query:{k:this.keyword.toUpperCase()}})
      //问题2 如何实现params参数的可传和可不传
      //比如在配置路由的时候，已经进行了占位，但是路由跳转的时候就是不传递，路径会出现问题的。
      //解决方法，就是在占位的后面添加一个？就可以实现params参数的可传和可不传。
      //问题3 params的参数可传也可以不传，但是传的是空字符串，如何解决？
      //通过添加undefined进行解决
      //this.$router.push({name:'search',params:{keyword:''||undefined},query:{k:this.keyword.toUpperCase()}})
    },
  },
};
</script>

<style scoped lang='less'>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
<template>
  <!-- 已经设置好的样式中改变结构顺序 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托，子级的事件委托给父级元素进行 -->
     <transition name="sort">
        <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}
                </a>
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </transition>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
//使用vuex中的辅助函数对其进行获取展示
import { mapState } from "vuex";
//按需引入lodash插件中的throttle进行节流操作
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      //返回当前所选的index的数值
      currentIndex: -1,
      show: true,
    };
  },
  //组件挂载完毕，可以向服务器发送请求
  //经常是在函数生命周期内发送请求
  mounted() {
    //通知Vuex发送数据请求，将数据存放在仓库中
    if(this.$route.path!='/home'){
      this.show=false;
    }
  },
  computed: {
    //对象的写法右侧是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
    //注入一个state参数，其实就是大仓库中的数据。
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    //鼠标进入，则修改当前的Index值
    //throttle函数尽量不要使用箭头函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    //鼠标移出，背景颜色效果消失
    leaveIndex() {
      this.currentIndex = -1;
    },
    //点击对应的标签实现路由的跳转
    //事件委派；把所有子节点的事件全部委派给父节点，此时存在了两个问题
    //1、如何确保点击的是a标签才进行路由的跳转
    //2、确定为a标签后，又如何分别确定对应的一二三级标题
    //针对于第一个问题，给子节点a加上自定义的属性data-categoryName,其余的子节点没有本属性
    goSearch(event) {
      //利用事件对象获取当前选择的节点
      let element = event.target;
      //节点中有一个属性dataset，可以获取当前节点的自定义属性和属性值
      console.log(element.dataset);
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //如何确定分别是一、二、三级的标签,再次通过绑定自定义属性data-categoryId
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //console.log(location,query);

        //整理合并参数，为了解决路由跳转中只能携带一种参数的问题
        if(this.$route.params){
          location.params=this.$route.params; 
          location.query = query;
        this.$router.push(location);
        }
      }
    },

    //创建search模块中TypeNav导航的出现和消失效果
    enterShow(){
      if(this.$route.path!='/home'){
        this.show=true;
      }
    },
    leaveShow(){
      if(this.$route.path!='/home'){
        this.currentIndex=1;
        this.show=false;
      }
    }
  },
};
</script>

<style scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //}
          //}
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transform: all 0.5s linear;
    }
  }
}
</style>
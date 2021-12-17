<template>
  <div class="swiper-container" ref="cur">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
                    <img :src="carousel.imgUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
</template>

<script>
//引包
import Swiper from 'swiper';
export default {
  name:'Carousel',
  props:['list'],
    watch:{
    list:{
      //不管结构是否加载完毕，上来就进行监视一次
      immediate:true,
      handler(){
        //此处依旧存在着v-for是否加载完毕的问题，因此还要使用nextTick()方法
        this.$nextTick(()=>{
    var mySwiper = new Swiper (this.$refs.cur, {
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
    },
  })
        })
      }
    }
  }

}
</script>

<style>

</style>
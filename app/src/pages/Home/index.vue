<template>
<div>
    <!-- 三级联动组件已经进行了全局注册，不需要再进行引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recomand></Recomand>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Floor></Floor>
    <Brand></Brand>
</div>
  
</template>

<script>
//引入其他的子组件
import ListContainer from '@/pages/Home/ListContainer';
import Recomand from '@/pages/Home/Recomand';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from 'vuex';
export default {
  name:'home',
  mounted() {
    this.$store.dispatch('getFloorList');
  },
  computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
  },
  components:{
      ListContainer,
      Recomand,
      Rank,
      Like,
      Floor,
      Brand,
  }
}
</script>

<style>

</style>
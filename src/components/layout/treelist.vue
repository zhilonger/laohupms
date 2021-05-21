<template> 
<ul> 
  <li :class="{active:activeid==dataList.id}">
    <i :class="dataList.colipse?'el-icon-caret-bottom':'el-icon-caret-right'" v-if="dataList.child" @click="dataList.colipse=!dataList.colipse"></i>
    <span class="ml-10" @click="selectItem(dataList.id)">{{dataList.name}}</span>
  </li>
  <template v-if="dataList.child && dataList.colipse"> 
     <treelist v-for="item in dataList.child" :dataList="item" :activeid="activeid" @selectItem="selectItem"></treelist> 
  </template> 
</ul>
</template> 
<script>
export default {
  name:'treelist',
  props:{
    dataList:{ 
      default:{}
      },
    activeid:{ 
      default:{}
      }
  }, 
  data() {
    return { 
      
    };
  }, 
  watch:{
    
  },
  created(){  
     
  },
  methods: {
     selectItem(ids){ 
        this.$emit('selectItem',ids);
      },
  }
};
</script>

<style scoped lang="scss">
 
</style>

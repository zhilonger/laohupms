<template>
 <div class="pt-14 px-14">
    <div class="d-flex top">
      <img class="mr-10" src="http://vue.qiweichengxin.com/static/img/contract.1bd2fbf.png" />
      <span class="font-14">项目卡片</span>
    </div>
    <div class="line"></div>
    <div class="navbar d-flex align-items-center pl-46">
      <i class="el-icon-arrow-left mr-8 pointer" @click="hand=hand>1?hand-1:1" ></i>

      <span v-for="item in navData"   v-if="item.index>=hand && item.index<hand+7"  :class="{active:(item.index==active||item.index==mouseOver)}"  @click="chooseNav(item.index)"  >{{item.name}}</span> 
      <i class="el-icon-arrow-right pointer" @click="hand=hand<3?hand+1:3"></i>
    </div>
    
    <div class="ml-46">
      <router-view/> 
    </div>
 </div> 

</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      active:1,
      mouseOver:0,
      hand:1,
      navData:[
        {index:1,name:'基本信息'},
        {index:2,name:'任务信息'},
        {index:3,name:'项目档案'},
        {index:4,name:'销售合同'},
        {index:5,name:'采购合同'},
        {index:6,name:'产品交付记录'},
        {index:7,name:'成本录入'},
        {index:8,name:'操作日志'},
        {index:9,name:'变更记录'},
      ],
      
    };
  },
  created() {
    //this.$test();
  },
  methods: {
       chooseNav(index){
         this.active=index;
         switch(index){
           case 1:
             console.log(234);
              this.$router.push('/object/base').catch(err => {
                  console.log(err)
                });
                break;
            case 2:
              this.$router.push('/object/mission').catch(err => {
                  console.log(err)
                });
                break;
            case 3:
              this.$router.push('/object/doc').catch(err => {
                  console.log(err)
                });
                break;
            default:
              return false;
         } 
       }


    }
};
</script>

<style lang="scss">
.top{
  img{
    width:36px;
    height:36px;
  }
}
.navbar{
  height:40px;  
  transform: translateY(-13px);  
  i{color:#909399;font-size:12px;}
  span{
    color:#303133;
    font-size:14px; 
    border-bottom: 2px solid transparent;
    margin-right: 40px;
    padding-bottom: 10px;
    font-weight: 500; 
    padding-top: 9px; 
    cursor:pointer;
  }
  span.active{
    color: #409eff;
    border-bottom: 2px solid #409eff;
  }
  span:hover{
    color: #409eff; 
  }
}
.line{
    border-bottom: 2px solid #f6f7f8;
    width: 100%;
    transform: translateY(27px); 
}
</style>

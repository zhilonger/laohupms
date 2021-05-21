<template>
  <el-container class="h-100">
    <el-header height="55px">
        <mheader :showfront="true"  ></mheader>
    </el-header>
    
    <el-container class="main-content">
      <el-aside :width="isCollapse?'60px':'200px'" class="main-aside"> 
        <div :class="['side-menu',{'Collapse':isCollapse}]">
          <li class="fold-btn pointer text-center"  @click="isCollapse=!isCollapse">
              <i class="el-icon-s-fold"></i> 
          </li>
          <ul>
            <template v-for="(item,key) in menuData">
              <li   :class="{active:item.active}"  @click="menuselect(key,item.child)">
                  <i :class="['icon',item.icon]"></i>
                  <div v-if="!isCollapse">
                      <span>{{item.name}}</span> 
                      <i :class="['el-icon-arrow-down',{toCircle1:item.colipse,toCircle2:!item.colipse&&clickMenu}]" v-if="item.child" ></i> 
                  </div>
              </li>  
             <li v-if="!isCollapse" v-show="item.colipse" v-for="(item1,key1) in item.child"   :class="{active:item1.active}" @click=activeselect(item1)>
                  <i class="icon"> </i>
                  <div>
                      <span>{{item1.name}}</span> 
                  </div> 
              </li>  
            </template> 
          </ul>
        </div>
      </el-aside>
      <el-container>
        <el-main class="bg-grey">
            <router-view/>
        </el-main>  
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return { 
      isCollapse: false,
      clickMenu:0, 
      menuData:[
        {name:'合同首页','icon':'el-icon-house',path:'/home/index','child':0,active:0,}, 
        {name:'合同审批','icon':'el-icon-house',path:'',child:0,active:0,},
        {name:'电子签署','icon':'el-icon-house',path:'',child:0,active:0,},
        {name:'合同归档','icon':'el-icon-house',path:'',active:0,colipse:0,child:[
          {name:'合同归档',path:'',active:0,},
          {name:'合同查询',path:'',active:0,}
        ]}
      ]
      
    };
  },
  created() {},
  methods:{
    menuselect:function (key,child){ 
        if(child){
            this.menuData[key].colipse=!this.menuData[key].colipse;
            this.clickMenu++;      
        }else{
            this.menuData.forEach((item,index,array)=>{
              item.active=0;
              if(this.menuData[index].child){
                  this.menuData[index].child.forEach((item1,index1,array1)=>{
                    item1.active=0;
                  })
              }
            }) 
            this.menuData[key].active = 1;
            //跳转
            this.$router.push(this.menuData[key].path).catch(err => {
                 // console.log(err)
                });
            
        } 
    },
    activeselect:function (item){
      this.menuData.forEach((item,index,array)=>{
         item.active=0;
         if(this.menuData[index].child){
            this.menuData[index].child.forEach((item1,index1,array1)=>{
              item1.active=0;
            })
         }
      }) 
        item.active=1;
        //跳转
    }
  }
}; 
import "../../assets/css/home.scss";
</script>

<style scoped lang="scss">


  
 
  
 
 
</style>

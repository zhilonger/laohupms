<template>
  <el-container class="h-100">
    <el-header height="55px">
        <admin-header :showfront="false"></admin-header>
    </el-header>
    
    <el-container class="main-content">
      <el-aside :width="isCollapse?'60px':'200px'" class="main-aside"> 
        <div :class="['side-menu',{'Collapse':isCollapse}]">
          <li class="fold-btn pointer text-center"  @click="isCollapse=!isCollapse">
              <i class="el-icon-s-fold"></i> 
          </li>
          <ul>
            <template v-for="(item,key) in menuData">
              <li  :class="{active:item.active}"  @click="menuselect(key,item.child)">
                  <i :class="['icon',item.icon]"></i>
                  <div v-if="!isCollapse">
                      <span>{{item.name}}</span> 
                      <i :class="['el-icon-arrow-down',{toCircle1:item.colipse,toCircle2:!item.colipse&&clickMenu}]" v-if="item.child" ></i> 
                  </div>
              </li>  
             <li v-if="!isCollapse" v-show="item.colipse" v-for="(item1,key1) in item.child"  :class="{active:item1.active}" @click=activeselect(item1)>
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
import adminHeader from "src/components/layout/admin-header";
export default {
  components: { adminHeader }, 
  name: "home",
  data() {
    return { 
      isCollapse: false,
      clickMenu:0,
      menuData:[ 
        {name:'部门管理','icon':'el-icon-house',path:'/depart/layout',child:0,active:0,}, 
        {name:'用户管理','icon':'el-icon-house',path:'/user/layout',child:0,active:0,}, 
        {name:'角色管理','icon':'el-icon-house',path:'/role/layout',child:0,active:0,}, 
        {name:'表单管理','icon':'el-icon-house',path:'/form/layout',child:[
          {
            name:'表单首页',
            path:'/form/layout',
            active:0,
          },
          {
            name:'表单类型',
            path:'/form/layout/typology',
            active:0,

          },
          {
            name:'模板管理',
            path:'/form/layout/template',
            active:0,

          }
        ],colipse:0,active:0,}, 
        {name:'菜单管理','icon':'el-icon-house',path:'/menu/layout',child:0,active:0,}, 

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
        this.$router.push(item.path)
        //跳转
    }
  }
};
import "../../assets/css/home.scss";
</script>

<style scoped lang="scss">

 
</style>

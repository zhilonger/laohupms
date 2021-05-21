<template>
  <div class="app-header"  >
      <el-container>
        <el-aside width="200px">
          <span>ecology | 前端用户中心</span>
        </el-aside>
        <el-main class="p-0 ">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="1">
              <label class="navOp flex justify-content-end align-items-center" @click="moveLeft"><i class="el-icon-arrow-left pointer" ></i></label>
            </el-col>
            <el-col :span="16" class="clearfix">
                <div class="header-nav" :style="'width:'+navList.length*120+'px;transform: translate3d(-'+leftDistance+'px, 0px, 0px);'"> 
                    <label v-for="(item,index) in navList" :class="{active:activeId==index}"   @click="activeId=index"><i :class="[item.icon]"></i><span>{{item.name}}</span></label>   
                </div>
            </el-col>
            <el-col :span="1" class="navOp flex justify-content-start align-items-center">
              <label @click="moveRight()"><i class="el-icon-arrow-right pointer" ></i></label>
            </el-col>
            <el-col :span="6">
                <div class="grid-content  d-flex align-items-center justify-content-end">
                <router-link :to="{ path: '/' }" >
                  <el-tooltip content="切换到前台" placement="bottom" effect="light">
                    <span class="el-icon-sort pl-20 font-18 mr-16 pointer" ></span>
                  </el-tooltip>
                </router-link> 
                <div :class="{'d-flex':true,'overUser':showUserDetail}" @click="showUserDetail=!showUserDetail" >
                  <span class="top-wedget1 mx-8 mt-6 font-10">心畅</span>
                  <label class="pl-8 pr-8">
                    <span>王心畅</span>
                    <span class="el-icon-caret-bottom"></span>
                  </label> 
                </div>
              </div>
            </el-col> 
          </el-row>
          
        </el-main>

      </el-container>
      <el-collapse-transition>
       <div v-if="showUserDetail" class="position-absolute user-wedget font-12 text-left text-dark bg-white index-9" >
                    <div class="utop-head d-flex align-items-center">
                          <div class="mr-16">
                            <span class="top-wedget1  text-white  text-center font-10">心畅</span>
                          </div>
                          <div class=""> 
                            <span class="text-primary">王心畅</span><span class="ml-10">总经理</span><br>
                            <div class="font-12">维森集团股份有限公司/董事长...</div>
                          </div>
                        </div>
                        <hr class="my-10">
                        <div class="utop-main">
                          <ul>
                            <li>
                              <span><span class="el-icon-copy-document mr-6"></span>语言选择</span>
                              <span>简体中文</span>
                            </li> 
                            <li><span class="el-icon-copy-document mr-6"></span>个性化设置</li>
                            <li><span class="el-icon-copy-document mr-6"></span>密码设置</li>
                            <li><span class="el-icon-copy-document mr-6"></span>主题中心</li>
                            <li><span class="el-icon-copy-document mr-6"></span>布局选择</li>
                            <li><span class="el-icon-switch-button mr-6"></span>退出</li>
                          </ul>
                        </div>
                  </div>
                  </el-collapse-transition>
  </div>
</template>

<script>
export default {
    props:{
        'showfront':{default:'默认议案'}
    },
  name: "admin-header", 
  data() {
    return {
      danger:'danger',
      nickname: "欢迎登陆,XXX",
      downPerson:['演示帐户','一般用户','管理人','财务','会计'],
      showUserDetail:false,
      showUserDetail1:false, 
      activeId:-1,
      navPage:1,
      leftDistance:0,
      navList:[
        {name:'组织权限中心',path:'',icon:'el-icon-rank'},
        {name:'流程引擎',path:'',icon:'el-icon-rank'},
        {name:'门户引擎',path:'',icon:'el-icon-rank'},
        {name:'内容引擎',path:'',icon:'el-icon-rank'},
        {name:'应用中心',path:'',icon:'el-icon-rank'},
        {name:'建模引擎',path:'',icon:'el-icon-rank'},
        {name:'移动引擎',path:'',icon:'el-icon-rank'},
        {name:'集成中心',path:'',icon:'el-icon-rank'},
        {name:'升级中心',path:'',icon:'el-icon-rank'},
        {name:'日志中心',path:'',icon:'el-icon-rank'},
        {name:'公文管理',path:'',icon:'el-icon-rank'},
        {name:'数据中心',path:'',icon:'el-icon-rank'},
        {name:'ESB中心',path:'',icon:'el-icon-rank'},
        {name:'系统安全',path:'',icon:'el-icon-rank'},
        {name:'系统导入导出',path:'',icon:'el-icon-rank'},
        {name:'语言中心',path:'',icon:'el-icon-rank'},
        {name:'表单管理',path:'',icon:'el-icon-rank'},
        {name:'菜单管理',path:'',icon:'el-icon-rank'},
      ]
        
    };
  },  
  created(){ 
    console.log('created');
  },
  methods: {
    moveRight(){
      const obj =this;
      let target = 730+this.leftDistance;
      let max = 120*(this.navList.length-4);
      const time1 = setInterval(function(){
        if(obj.leftDistance<max && obj.leftDistance<target){
          obj.leftDistance+=2;
        }else{
          clearInterval(time1);
        }
      },2)
    },
    moveLeft(){
      const obj =this;
      let target = this.leftDistance-730;
      let min = 0;
      const time1 = setInterval(function(){
        if(obj.leftDistance>min && obj.leftDistance>target){
          obj.leftDistance-=2;
        }else{
          clearInterval(time1);
        }
      },2)
    },
    moveProcess(){
      
    }
  }
};

</script>

<style scoped lang="scss">

 Header{line-height:55px;}
 .el-icon-sort{color:#fff;}
.app-header{
  .header-nav{
    display: flex;
    label{
      position: relative;
      padding:0 20px;
      cursor: pointer;
      font-size:12px;
      i{    font-size: 18px;
          position: absolute;
          top: 50%;
          margin-top: -10px;}
      span{margin-left: 26px;}
    }
    label.active{    
        color: #fff;
        background-color: #3f73c4;
    }
    label:hover{    
        color: #fff;
        background-color: #3f73c4;
    }
  }
}
.top-wedget1{background-color: rgb(85, 177, 249);
    display: block; 
    height: 40px;
    width: 40px; 
    border-radius: 50%; 
    line-height: 40px;}
.user-wedget{  
    line-height: 25px; 
    right: 0;
    top: 59px;
    padding: 10px 20px;
    border:1px solid #ababab;
    border-top:0;
}
.overUser{
    background-color: #fff;
    color: #909399;
    .top-wedget1{color:#fff;}
}

  
</style>

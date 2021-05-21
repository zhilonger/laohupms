<template>
  <div class="app-header"  >
      <el-container>
        <el-aside width="200px">
          <span>ecology | 前端用户中心</span>
        </el-aside>
        <el-main class="p-0 ">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="10">
              <div class="grid-content bg-purple-left d-flex">
                <label class="pl-6 pr-12 d-flex align-items-center">
                  <span class="pl-4 el-icon-s-grid font-28"></span><span class="font-14">合同管理</span>
                </label>
                <span class="iconfont icontab_classification_p"></span>
                <label class="px-10 mx-6 font-12">微搜</label>
                <label class="top-input ml-6 d-flex align-items-center">
                    <input  placeholder="请输入关键词搜索" class="font-12" /> 
                    <span class="iconfont iconfangdajing pointer"></span>
                </label> 
                
              </div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content  d-flex align-items-center justify-content-end">
                <span class="iconfont iconlifangtilitiduomiantifangkuai px-8"></span>
                <span class="iconfont iconyongnengjiegou px-8"></span>
                <span class="iconfont iconjiegou1 px-8"></span>
                <el-dropdown placement="bottom-start"  >
                <label class="top-wedget ml-6 d-flex align-items-center px-14 py-2 font-12">
                    <span class="iconfont iconliebiaoxunhuan"></span> 
                    <span class="px-10 font-12">演示帐号切换</span>
                    <span class="el-icon-caret-bottom"></span>
                </label> 
                 <el-dropdown-menu slot="dropdown"> 
                    <el-dropdown-item v-for="item in downPerson"><span class="el-icon-s-custom  pr-14"></span>{{item}}</el-dropdown-item> 
                </el-dropdown-menu>
                </el-dropdown>
                <label class="d-flex align-items-center px-14">
                  <span class="el-icon-date mr-4"></span>
                  <span class="font-12">考勤</span>
                </label> 
                <label>
                  <el-badge :value="12" :type="danger" class="top-badge d-inline">
                    <span class="iconfont iconlingdang font-20"></span>
                  </el-badge> 
                </label>
                
                 
                  <el-tooltip content="切换到后台" placement="bottom" effect="light" >
                    <span class="el-icon-sort pl-20 font-18 mr-16 pointer" @click="goAdmin" ></span>
                  </el-tooltip> 
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
  name: "app-header", 
  data() {
    return {
      danger:'danger',
      nickname: "欢迎登陆,XXX",
      downPerson:['演示帐户','一般用户','管理人','财务','会计'],
      showUserDetail:false,
      showUserDetail1:false,
      
    };
  },  
  created(){ 
    console.log('created');
  },
  methods: {
    goAdmin(){
      const {href} = this.$router.resolve({
              path: '/admin',
          })
          window.open(href, '_blank') 
    }
  }
};

</script>

<style scoped lang="scss">

 Header{line-height:55px;}
 .el-icon-sort{color:#fff;}
 
.top-input{
     
    
   input{width:180px;background-color: rgba(0, 0, 0, 0.08);border-radius: 5px;;color:#fff; border:none;height: 32px;padding: 0 30px 0 15px; }
   input::-webkit-input-placeholder{
            color:#fff;
        }
        input::-moz-placeholder{ 
            color:#fff;
        }
        input:-moz-placeholder{  
            color:#fff;
        }
        input:-ms-input-placeholder{  
            color:#fff;
        }
    .iconfont{transform: translateX(-30px);} 
}
.top-wedget{
    background-color: #efefef; 
    height: 30px; 
    color: #000; 
    border-radius: 15px;
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

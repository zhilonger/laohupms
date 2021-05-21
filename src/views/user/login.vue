<template>
  <div class="bg-container">
    <div class="form-dialog" @click="languageOpen=false;">
      <img  class="form-bg" src="../../assets/images/login-box.png"/>
      <div class="form-con d-flex flex-column align-items-center index-9">
          <img class="logo-pic" src="http://enterprise.e-cology.com.cn/wui/theme/ecology9/image/e9.png"/>
          <div :class="{'position-r':true,'language-list':true,'font-12':true, 'mt-60':true,'active':languageOpen}">
             <li @click.stop="languageOpen=true;">{{languageNow}}<i class="el-icon-caret-bottom"></i> </li>
             <ul v-if="languageOpen" class="position-absolute">
              <li v-for="item in languageData" @click.stop="languageNow=item;languageOpen=false;">{{item}}</li> 
             </ul>
          </div>
          <div class="form-list mt-10 w-100 px-60">
            <div class="list-group d-flex align-items-center font-16 pb-4">
                <i class="el-icon-user font-28"></i>
                <input class="pb-4" type="text" v-model="user.userName"  placeholder="登录名"/>

            </div> 
            <div class="list-group d-flex align-items-center font-16 mt-10 pb-6">
                <i class="el-icon-lock font-28"></i>
                <input type="text" v-model="user.passWord" placeholder="登录密码" /> 
            </div>
          </div>
          <div class="d-flex justify-content-end mt-40 mb-20 wdget1" >
            <label class="d-flex align-items-center">
                <input type="checkbox"/>
                <span class="ml-10">记住账号</span>
            </label>
            <label class="d-flex align-items-center ml-20">
                <input type="checkbox"/>
                <span class="ml-10">记住账号</span>
            </label>
          </div>
          <div >
            <button class="btn1 font-18 pointer" @click="submitForm">登录</button>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import service from "src/api/api";
export default {
  data() {
    return {
      languageOpen:false,
      languageNow:'简体中文',
      languageData:['简体中文','English','繁体中文'],
      user:{
        userName:'',
        passWord:''
      }
    };
  },
  created() {
         
    //this.$test();
  },
  methods: {
       submitForm:function(){ 
          let obj = this; 
          var user = {username:obj.user.userName,password:obj.user.passWord};
          if(!this.$checkData(obj.user.userName) || !this.$checkData(obj.user.passWord)){
                obj.$message({
                  message: '账号密码不得为空',
                  dangerouslyUseHTMLString: true,
                  type: "error"
                });
                return false;
          }
          this.$axios.post('/api/login',user).then(function(res){ 
                if(res.code!=200){
                  obj.$message({
                    message: res.msg,
                    dangerouslyUseHTMLString: true,
                    type: "error"
                  });
                }else{
                  sessionStorage.setItem("access_token", res.data.access_token); 
                  obj.$message({
                    message: '登录成功', 
                    type: "success",
                    duration:1000,
                    onClose:function(){
                      obj.$router.push( {path:'/home/index'});
                    }
                  }); 
                }
              }).catch(function(){});
       }

    }
};
</script>

<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 12px;
  line-height: 1.6;
  color: #000;
  background-color: #fff;
} 
 .bg-container{
    color:#bacde0;
    padding:60px;
    background-image: url(../../assets/images/bg5.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    min-width: 600px;
    min-height: 800px;
    .form-dialog{
      position: absolute; top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
      width: 444px;
      height: 587px;
      .form-bg,.form-con{
        transform: rotate(0deg);
        opacity: 1;
        cursor: default;
        position:absolute;
        width:100%;
        height:100%;
      } 
      .logo-pic{
        transform: rotate(0deg);
        opacity: 1;
        cursor: default; 
        margin-top: 80px;
        width: 170px;
        height: 130px;
      }
      .language-list{
        li{
          list-style:none;
          text-align:center;
          line-height:30px;
          width:80px;
          height:30px;
          color:#bacde0;
        }

      }
      .active li{
          color:#646767;
          background-color:#fff;
      }
      .active li:hover{
        background-color:#4695c4;
        color:#fff;
      }
      .form-list{
        .list-group{ 
        border-bottom: 1px solid; 
          input{
            color:#bacde0;
            border: none;
            background-color: unset;
            font-size: 16px;
            margin-left: 10px;
            }
        }
      }
      .wdget1{width:324px;}
      .btn1{
        background-color:#0b1a32;
        width:324px;
        color:#bacde0;
        border:0;
        padding:10px 15px;
      }
    }
 }
</style>

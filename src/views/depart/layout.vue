<template>
<div class="bg-white h-100 dp">
      <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
          <label class="d-flex align-items-center pl-20">
            <i class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"></i>
            <span>部门管理</span>
          </label>
          <div class="d-flex top-tool align-items-center"> 
              <el-button type="primary" @click="editFunc()">编辑</el-button>
              <el-button type="primary" @click="addchildFunc()">新建下级部门</el-button>
              <el-button type="primary" @click="addFunc()" v-if="info.upid">新建同级部门</el-button>
             <el-button type="danger" @click="delFunc()" v-if="info.upid">删除</el-button>
            </div>
      </div>
      <div class="main">  
        <el-container class="main-content h-100">
          <el-aside :width="isCollapse?'0':'20%'"> 
              <div class="top-weg position-relative">
              <div class="top-input px-14 d-flex">
                <label class="font-14 bold">全部搜索</label>
                <input type="text" class="pr-28 pl-14 w-100" /> 
              </div>
              <i class="iconfont iconfangdajing pointer"></i>
              </div>
              <div class="menuList  color-g2 font-12" :key="menuKey">
                  <template v-for="(item,key) in menuList">
                     <treelist :dataList="item"  :activeid="activeid"  @selectItem="selectItem"  ></treelist>
                  </template>
              </div>
          </el-aside>
          <el-main class="position-relative" > 
              <div :class="{'left-right-layout-btn':true,'left-layout-btn':!isCollapse,'right-layout-btn':isCollapse}" @click="isCollapse=!isCollapse"></div>
              <template>
                <div class="">
                  <div class="content mt-20">
                    <div class="el-row">
                      <div class="el-col el-col-4 el-col-offset-6">
                        <div class="grid-content">
                          <div>简称</div>
                          <div>全称</div>
                          <div v-if="info.upid">所属分部</div>  
                          <div>显示顺序</div>
                          <div>部门ID</div>
                          <div>部门编号</div> 
                        </div>
                      </div>
                      <div class="el-col el-col-8">
                        <div class="grid-content de-line">
                          <div>{{ info.name }}</div>
                          <div>{{ info.fullname }}</div> 
                          <div v-if="info.upid">{{ info.upstep }}</div> 
                          <div>{{ info.sort }}</div>
                          <div>{{ info.partId }}</div>
                          <div>{{ info.partNum }}</div> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-dialog :title="diglogTitle" :visible.sync="dialogVisible" width="40%" >
                    <el-form ref="form" :model="form" class="font-12" label-width="90px">
                      <el-form-item label="简称">
                        <el-input v-model="form.name"></el-input>
                      </el-form-item>
                      <el-form-item label="全称">
                        <el-input v-model="form.fullname"></el-input>
                      </el-form-item>
                      <el-form-item label="所属分部">
                        <el-input v-model="form.upstep" :disabled="true" ></el-input>
                      </el-form-item> 
                      <el-form-item label="显示顺序">
                        <el-input v-model="form.sort"></el-input>
                      </el-form-item>
                      <el-form-item label="部门ID">
                        <el-input v-model="form.partId"></el-input>
                      </el-form-item>
                      <el-form-item label="部门编号">
                        <el-input v-model="form.partNum"></el-input>
                      </el-form-item>
                      <el-form-item class="text-right">
                        <input type="hidden" v-model="form.upid"/>
                        <input type="hidden" v-model="form.id"/>
                        <input type="hidden" v-model="form.op"/>
                        <el-button class="" @click="onSubmit('form')">{{diglogButton}}</el-button>
                      </el-form-item>
                    </el-form>
                  </el-dialog>
                </div>
              </template>
          </el-main>
        </el-container>
      </div>
      
</div>
</template>

<script> 
import treelist from "src/components/layout/treelist"; 
export default {
  components: { treelist }, 
  data() {
    return {
      isCollapse: false, 
      activeid:1, 
      menuKey:1,
      menuList:[
        {name:'江东分区',fullname: "华厦江东分区",upstep:0,id:1,sort: "223",partId: "998",partNum: "123123123",upid:0,colipse:0,child:[
          {
            name: "A部门",
            fullname: "行政机关部门", 
            upstep: "华厦江东分区", 
            sort: "223",
            partId: "998",
            colipse:0,
            partNum: "123123123", 
            id:11,
            upid:1,
            child:[
               {
                  name: "AA部门",
                  fullname: "aa机关部门", 
                  upstep: "行政机关部门", 
                  sort: "223",
                  colipse:0,
                  partId: "998",
                  partNum: "123123123", 
                  id:111,
                  upid:11
              },
               {
                  name: "AB部门",
                  fullname: "ab机关部门", 
                  upstep: "行政机关部门", 
                  sort: "223",
                  colipse:0,
                  partId: "998",
                  partNum: "123123123", 
                  id:112,
                  upid:11
              },
            ]
        },
         {
        name: "B部门",
        fullname: "bbbb", 
        upstep: "华厦江东分区", 
        sort: "223",
        partId: "998",
        colipse:0,
        partNum: "123123123", 
        id:12,
        upid:1
      },
        ]}
        
      ],
      name: "",
      dialogVisible: false,
      diglogTitle:'新建部门',
      diglogButton:'保存',
      info: {
        name:'江东分区',fullname: "华厦江东分区",upstep:0,sort: "223",id:1,sort: "223",partId: "998",partNum: "123123123",upid:0,colipse:0,child:[1,2]
      },
      form: {
          name: "办公室",
          fullname: "办公室", 
          upstep: "街道办", 
          partId: "998",
          partNum: "123123123", 
          child:[],
          sort:'234',
          op:'add',
          upid:0
        },
        emptyForm:{
          name: "",
          fullname: "", 
          upstep: "", 
          sort: "",
          partId: "",
          partNum: "",
          child:[],
          id:0
        },
     
    };
  },
  created() {
    //this.$test();
  },
  methods: {
      selectItem(ids){
        this.activeid = ids;  
        console.log(ids);
        this.selectItemFunc(ids,this.menuList); 
      },
      selectItemFunc(ids,menuList){
         menuList.forEach((elem, index) => {  
            if(elem.id == ids){  
               this.changeData(this.info,elem,1);
               return false;
            }else if(elem.child!=undefined){
              this.selectItemFunc(ids,elem.child);
            }
          }); 
      },
      addFunc(){
         this.dialogVisible=true;
        this.diglogTitle = '新建部门'; 
        this.changeData(this.form,this.emptyForm);
        this.form.upstep = this.info.upstep;
        this.form.op = 'add'; 
        delete this.form.child;
        this.form.upid = this.info.upid;
      },
      addchildFunc() {   
        this.changeData(this.form,this.emptyForm);
        this.form.upstep = this.info.fullname;
        this.form.op = 'add';
        delete this.form.child;
        this.form.upid = this.activeid;
        this.dialogVisible=true; 
        this.diglogTitle = '新建部门'; 
      },
      editFunc() {    
        this.dialogVisible=true;  
        this.changeData(this.form,this.info); 
        this.form.id = this.activeid; 
        this.form.op = 'edit';
        this.diglogTitle = '编辑部门';
      },
      delFunc(){
        console.log(this.info);
        if(this.info.child!=undefined && this.info.child.length>0){
          this.$message.error('当前部门包含子部门,不可删除');
          return false;
        }
        this.$confirm('此操作将永久删除该部门, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteData(this.activeid,this.menuList);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        }); 
      },
       addForm(ids,menuList){
          menuList.forEach((elem, index) => {  
            if(elem.id == ids){ 
              if(elem.child==undefined){
                elem.child = [];
              }
              let ob = {}; 
              this.changeData(ob,this.form);
              elem.child.push(ob);
              return true;
            }else if(elem.child!=undefined){
              this.addForm(ids,elem.child);
            } 
          }); 
    },
     editForm(ids,menuList){
          menuList.forEach((elem, index) => {  
            if(elem.id == ids){  
              this.changeData(elem,this.form);
              return true;
            }else if(elem.child!=undefined){
              this.editForm(ids,elem.child);
            } 
          }); 
    },

    changeData(elem,to,deep){ 
        elem.name = to.name;
        elem.fullname = to.fullname;
        elem.sort = to.sort;
        elem.partId = to.partId; 
        elem.upstep = to.upstep;
        elem.upid = to.upid;
        elem.partNum = to.partNum;
        elem.id = to.id; 
        if(to.child!=undefined && to.child.length>0 && deep==1){
          elem.child = [1,2,3];
        }else if(to.child!=undefined){
          delete elem.child;
        }
    },
      deleteData(ids,menuList){   
          menuList.forEach((elem, index) => {  
            if(elem.id == ids){ 
              menuList.splice(index,1); 
            }else if(elem.child!=undefined){
              this.deleteData(ids,elem.child);
            }
          }); 
      },
      onSubmit(formName) {
        var obj = this;
          if(this.form.op == 'edit'){
             obj.editForm(this.form.id,this.menuList);  
             this.changeData(this.info,this.form);
          }else{ 
            this.form.id = this.form.upid*1000+Math.floor(Math.random()*1000+1000);
            console.log(this.form.id);
            obj.addForm(this.form.upid,this.menuList);
          } 
          
          obj.$message({
            message: '保存成功', 
            type: "success",
            duration:1000,
            onClose:function(){
              obj.dialogVisible=false; 
              ++obj.menuKey;
            }
          }); 
        } 
    },
     
    
};
</script>

<style lang="scss">

.color-g2{color:#494949}
 .bg-b2{
    background-color:rgb(33, 115, 70);
    }
.dp{
  .header{height:50px;}
  .main{
    height: calc(100% - 50px);
  }
  .el-aside{
      border-right: 1px solid #eaeaea;
      z-index: 9; 
    .top-input{
        height: 46px;
        align-items: center; 
      label{width:76px;}
      input{
        flex: 1;
        height: 28px;
        border: 1px solid #d9d9d9;
      } 
    }

  .top-weg>i{
      position: absolute;
      top: 14px;
      right: 23px;
      }
    .menuList{
        line-height: 26px;
        ul{
          margin: 0px;
          width: 100%;  
          padding-left:10px;
          li{
            cursor: pointer;
            padding: 0px 10px 0px 10px;
          } 
          li.active{
              background-color: #def0ff;color:#494949;
            }
          li:hover{background-color: #def0ff;color:#018efb}
        }
          
    }
  }
  .left-right-layout-btn{
    width: 18px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -30px;
      z-index: 11;
      cursor: pointer;
      background-size: 100% 100%;
  }
  .left-layout-btn{
    background: url(../../assets/images/leftTree-show.png) no-repeat -2px 0;
  }
  .left-layout-btn:hover{
    background: url(../../assets/images/leftTree-show-hover.png) no-repeat -2px 0;
  }
  .right-layout-btn{
    background: url(../../assets/images/leftTree-hide.png) no-repeat -2px 0;
  }
  .right-layout-btn:hover{
    background: url(../../assets/images/leftTree-hide-hover.png) no-repeat -2px 0;
  }
  .top-tool{
    .el-button{
          height: 31px;
      background-color: #2db7f5; 
      padding: 5px 15px;
      border: none;
      font-size: 12px;
    }
    button.el-button--danger{
     color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    }
  }
  .content {
    line-height: 40px;
    color: #303030;
    font-size: 12px;
    .de-line div {
      border-bottom: 1px solid #eceeef;
      line-height: 39px;
    }
  }
  form{
    .el-form-item__label{
      font-size: 12px;
    }
    .el-input {
      font-size: 12px;
    }
    .el-form-item {
      margin-bottom: 5px;
    }
    .el-form-item__label {
        line-height:41px;
    }
    
  }
  button.el-button{
      height: 31px;
        background-color: #2db7f5; 
        padding: 5px 15px;
        border: none;
        font-size: 12px;
        color:#fff;
    }
  .el-dialog__body {
    padding: 10px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  } 
}
</style>

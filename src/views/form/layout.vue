<template>
  <div class="bg-white h-100 dp">
      <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
        <label class="d-flex align-items-center pl-20">
          <i
            class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"
          ></i>
          <span>表单管理</span>
        </label>
        <div class="d-flex top-tool align-items-center">
          <el-button type="primary" @click="addform()">新建表单</el-button>
        </div>
      </div>
  <div class="main">
      <el-container class="main-content h-100">
        <el-aside :width="isCollapse ? '0' : '20%'">
          <div class="top-weg position-relative">
            <div class="top-input px-14 d-flex">
              <label class="font-14 bold" >表单搜索</label>
              <input type="text" class="pr-28 pl-14 w-100" />
            </div>
            <i class="iconfont iconfangdajing pointer"></i>
          </div>

          <div class="main-tree">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </el-aside>
        <el-main class="position-relative">
          <div
            :class="{
              'left-right-layout-btn': true,
              'left-layout-btn': !isCollapse,
              'right-layout-btn': isCollapse,
            }"
            @click="isCollapse = !isCollapse"
          ></div>

          <template v-if="showMode == 1">
            <div class="table pl-10">
              <el-table
                ref="multipleTable"
                v-loading="loading"
                element-loading-text="加载中"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :height="tableHeight"
                class="font-12"
              >
                <el-table-column
                  label="表单名称"
                  width="210"
                  show-overflow-tooltip
                >
                  <template #default="scope"
                    ><a
                      @click="showObj(scope.$index)"
                      class="pointer color-b1"
                      >{{ scope.row.name }}</a
                    ></template
                  >
                </el-table-column>
                <el-table-column prop="no" label="表单分类"> </el-table-column>
                <el-table-column prop="type" label="创建时间">
                </el-table-column>
             
                <el-table-column label="操作" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <div
                      @mouseleave="showIndex = -999"
                      @mouseover="showIndex = scope.$index"
                    >
                      <i v-if="showIndex != scope.$index" class="el-icon-more">
                      </i>
                      <div
                        class="wedget2 pointer"
                        v-if="showIndex == scope.$index"
                      >
                        <span @click="showObj(scope.$index)">编辑</span
                        ><span
                          class="bg-danger"
                          @click="deleteObj(scope.$index)"
                          >删除</span
                        >
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <div class="page mt-20 mr-10">
                <el-pagination
                  background
                  layout="total,prev, pager, next,jumper"
                  :total="1000"
                >
                </el-pagination>
              </div>
            </div>
          </template>
         
        </el-main>
      </el-container>
    </div>
    <el-dialog :title="diglogTitle" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form" class="font-12" label-width="90px">
        <el-form-item label="登录帐号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="在职状态">
          <el-select v-model="form.state" placeholder="请选择在职状态">
            <el-option label="在职" value="1"></el-option>
            <el-option label="离职" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="form.depart"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="上级">
          <el-input v-model="form.upstep"></el-input>
        </el-form-item>
        <el-form-item label="显示序号">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item class="text-right">
          <input type="hidden" v-model="form.id" />
          <input type="hidden" v-model="form.op" />
          <el-button class="" @click="onSubmit('form')">{{
            diglogButton
          }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import treelist from "src/components/layout/treelist";

export default {
  data() {
    return {
       isCollapse: false,
      activeid: 2,
      userActive: 0,
      showMode: 1,
      showIndex: -999,
      menuKey: 1,
      loading: false,
      dialogVisible: false,
      diglogTitle: "新建部门",
       data: [
         {
          label: '菜单',
          children: [
            {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          },
          {
            label: '流程管理',
            children: [{
              label: '三级 1-1-1'
            }]
          }
          
          ]
        }
      
        
        ],
      name: "",
      dialogVisible: false,
      diglogTitle: "新建部门",
      diglogButton: "保存",
      info: {
        name: "江东分区",
        fullname: "华厦江东分区",
        upstep: 0,
        sort: "223",
        id: 1,
        sort: "223",
        partId: "998",
        partNum: "123123123",
        upid: 0,
        colipse: 0,
        child: [1, 2],
      },
      form: {
        username: "",
        name: "",
        mobile: "",
        password: "",
        sex: "",
        state: "",
        depart: "",
        role: "",
        upstep: "",
        num: "",
        op: "add",
        id: "",
      },
      tableHeight: window.innerHeight - 200,
      tableData: [
        {
          name: "合同信息表",
          no: "未分类",
          type: "2020-02-01",
        
        },
        {
          name: "客户信息表",
          no: "未分类",
          type: "2020-02-01",
        
        },
        {
          name: "项目信息表",
          no: "未分类",
          type: "2020-02-01",
        
        },
        {
          name: "供应商信息表",
          no: "未分类",
          type: "2020-02-01",
        
        },
        {
          name: "资产信息表",
          no: "合同类",
          type: "2020-02-01",
        },
         {
          name: "资产信息表",
          no: "合同类",
          type: "2020-02-01",
        },
         {
          name: "资产信息表",
          no: "合同类",
          type: "2020-02-01",
        },
         {
          name: "资产信息表",
          no: "合同类",
          type: "2020-02-01",
        },
         {
          name: "资产信息表",
          no: "合同类",
          type: "2020-02-01",
        },
      
      ],
  
     
    };
  },
  components: { treelist },
  methods: {
      selectItem(){

      },
      addform() {
      this.dialogVisible = true;
      this.diglogTitle = "新建表单";
      this.empetyData(this.form);
      this.form.op = "add";
    },
      showObj(e){
        console.log(e);
        this.$router.push('/form/layout/update')
      },
      deleteObj(e){

   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.tableData.splice(e,1)

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
      }
  },
  mounted() {},
  components: {},
};
</script>

<style lang='scss' >
.el-tree-node__content:hover{
  width:100% ;
  background-color: #def0ff; color:#018efb !important;
}
.el-tree-node__content:active{
    background-color: #def0ff; color:#018efb !important;
  }
.el-tree-node__label {
    font-size: 12px;
}
.el-tree-node__expand-icon {
    cursor: pointer;
    color: #C0C4CC;
    font-size: 12px;
    transform: rotate(0);
    transition: transform .3s ease-in-out;
} 
.el-tree-node__expand-icon:hover{
     color:  #018efb;
} 
.el-tree-node__expand-icon:active{
    color:  #018efb;
}
.is-focusable:active{
    background-color: #def0ff; color:#018efb !important
}       
</style>

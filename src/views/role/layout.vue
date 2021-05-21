<template>
  <div class="bg-white h-100 homePage">
      <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
          <label class="d-flex align-items-center pl-20">
            <i class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"></i>
            <span>角色管理</span>
          </label>
          <div class="d-flex top-tool align-items-center"> 
              <el-button type="primary"  @click="addFunc">新增角色</el-button>
              <el-button type="primary"   >导入</el-button>
             <el-button type="primary"  >导出</el-button>
            </div>
      </div>
      <div class="main "> 
        <div class="tab-show mt-16">
        <div   class="position-relative"  v-loading="loading_first">
          <!-- header-nav -->
          <div class="table pl-10" :key="menuKey">
            <template>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :height="tableHeight" 
                class="font-12"
                >
                
                <el-table-column
                  label="合同名称"
                  width="210"
                  show-overflow-tooltip>

                  <template #default="scope" ><a  class="pointer color-b1">{{ scope.row.name }}</a></template>
                </el-table-column>
                <el-table-column
                  prop="no"
                  label="合同编号" >
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="合同类型" >
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="签订日期" 
                 >
                </el-table-column>
                <el-table-column
                  prop="op"
                  label="归档人"
                   >
                </el-table-column>
                <el-table-column
                  prop="optime"
                  label="归档时间" 
                 >
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
                        <span @click="editFunc(scope.$index)">编辑</span
                        ><span
                          class="bg-danger"
                          @click="deleteFunc(scope.$index)"
                          >删除</span
                        > 
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
               
            </template>
          </div>
          <div class="page mt-20 mr-10">
            <el-pagination background layout="total,prev, pager, next,jumper" :total="1000">
            </el-pagination>
          </div>
        </div>
        </div>
      </div>
      <el-dialog :title="diglogTitle" :visible.sync="dialogVisible" width="350px">
      <el-form ref="form" :model="form" class="font-12" label-width="90px">
        <el-form-item label="序号">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-input v-model="form.name"></el-input>
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
export default {
  data() {
    return { 
      advanceSearch:false,
      loading_first:false,
      showIndex:-999,
       menuKey:1,
       form: { 
        name: "", 
        num: "", 
        id: "",
      },
      dialogVisible: false,
      diglogTitle: "新增角色",
      diglogButton: "保存",
      tableHeight: window.innerHeight-250,
      tableData: [{
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-01',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-02',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-03',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-04',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-05',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-06',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-07',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-08',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-03',
          op:'张小鹏',
          optime:'2020-02-13'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '20200203004',
          type: '采购合同补充',
          date: '2020-02-04',
          op:'张小鹏',
          optime:'2020-02-14'
        }, {
          name:'设备采购2020 采购补充合同',
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-03',
          op:'张小鹏',
          optime:'2020-02-13'
        }],
        multipleSelection: []
    };
  },
  created() {
    //this.$test();
  },
  methods: {
      handleOpen(){
        return false;
      },
      handleClick(tab, event) {
        console.log(tab.name);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSubmit(){
            this.advanceSearch = false;
            this.loading_first = true;
            setTimeout(() => {
              this.loading_first = false;
            }, 2000); 
      },
      addFunc() {
      this.dialogVisible = true;
      this.diglogTitle = "新增角色";
      this.empetyData(this.form);
      this.form.op = "add";
    },
    empetyData(elem) { 
      elem.name = "";
      elem.id = 0; 
      elem.num = "";
    },
    editFunc(tindex) { 
      this.dialogVisible = true;
      this.diglogTitle = "编辑角色"; 
      this.form.op = "edit";
      this.form.name =  this.tableData[tindex].name;
      this.form.num = this.tableData[tindex].no;
      this.form.id = tindex;
    },
 addForm(item) {
      let newObj = {
        name: item.name,
        no: item.num,
        type: "采购合同补充",
        date: "2020-02-03",
        op: item.name,
        optime: "2021-02-13",
      };
      this.tableData.push(newObj);
    },
    editForm(item) { 
      let newObj = {
        name: item.name,
        no: item.num,
        type: "采购合同补充",
        date: "2020-02-03",
        op: item.name,
        optime: "2021-02-13",
      };
      this.tableData[this.form.id] = newObj;
    },
    onSubmit(formName) {
      var obj = this;
      if (this.form.op == "edit") {
        obj.editForm(this.form);
      } else {
        obj.addForm(this.form);
      } 
      obj.$message({
        message: "保存成功",
        type: "success",
        duration: 1000,
        onClose: function () {
          obj.dialogVisible = false;
          obj.menuKey++;
        },
      });
    },
    deleteData(tindex){
      this.tableData.splice(tindex,1);
    },
    deleteFunc(tindex){
       this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteData(tindex);
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

    }
};
</script>

<style lang="scss">
 .bg-b2{
    background-color: rgb(87, 153, 229);
    }
.homePage{
  .top-input{
      line-height: 0;   
    input{
      height: 32px;width:180px;background-color:unset;border: 1px solid #e7e7e9;color:#606266;padding: 0 30px 0 15px; 
      border-radius: 5px;
    }
    .iconfont{transform: translateX(-30px);} 
  }
  .el-tabs__item { 
      font-size: 12px; 
  }
  .Cover{    width: 100%;
      height:100%;
      background-color: #000;
      position: absolute;
      z-index: 9;
      opacity: 0.2;
      top: 0;
  }
  .search-form{  
      background-color: #fff;
      z-index: 999; 
      position: absolute;
      width: 100%;
    .el-form-item__label{
      font-size:12px;
      color:#000;
    }
    .el-input{
      font-size:12px;
      color:#000;
      .el-input__inner{
        width:150px;
        height:30px
      }
    }
  }
  .table{ 
    
    thead{
      background-color:rgb(247,251,254);
      th{
        background-color:rgb(247,251,254);
      }
    }
    .el-table{
      color:rgb(51,51,51);
      thead{color:#000;font-weight:400;
        th:first-child>.cell{
          padding-left:14px;
        }
      }; 
      .wedget2{
        padding: 8px;
        span{
          background-color: #007aff;
          color: #fff;
          padding: 8px;
        }
      }
      
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td {
          background-color: rgb(233, 247, 255);
      }

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
  .page{text-align:right;
      }

}
</style>

<template>
  <div class="bg-white h-100 homePage">
      <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
          <label class="d-flex align-items-center pl-20">
            <i class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"></i>
            <span>归档执行</span>
          </label>
          <div class="d-flex">
                <label class="top-input d-flex align-items-center">
                    <input  placeholder="模糊搜索" class="font-12" /> 
                    <span class="iconfont iconfangdajing pointer"></span>
                </label> 
          
              <label class="d-flex align-items-center mr-20 ml-10 font-12">
                <button class="bth1 bg-g1 pointer" @click="advanceSearch=!advanceSearch"><i class="el-icon-s-fold px-4 "></i>高级搜索</button> 
              </label>
            </div>
      </div>
      <div class="main ">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="px-20 font-15">
            <el-tab-pane label="待归档合同" name="first"> </el-tab-pane>
            <el-tab-pane label="合同校验" name="second"> </el-tab-pane>
            <el-tab-pane label="归档情况" name="third"> </el-tab-pane> 
          </el-tabs>
        </template>
        <div class="tab-show ">
        <div v-if="activeName=='first'" class="position-relative"  v-loading="loading_first">
          <div v-if="advanceSearch" class="Cover"></div>
          <div v-if="advanceSearch" class="search-form font-12 pl-10"> 
              <el-form :inline="true" :model="formInline" class="demo-form-inline font-12" >
                <el-form-item label="合同名称：">
                  <el-input  v-model="formInline.name" placeholder="合同名称"></el-input>
                </el-form-item>
                <el-form-item label="合同编号：">
                  <el-select  v-model="formInline.no"  placeholder="合同编号">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="签订日期">
                  <el-select  v-model="formInline.date"  placeholder="全部">
                    <el-option label="昨天" value="1"></el-option>
                    <el-option label="今天" value="2"></el-option>
                    <el-option label="明天" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button class="font-12 px-12 py-8" type="primary" @click="onSubmit"><i data-v-0fb989a4="" class="el-icon-search" ></i>查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          <div class="table pl-10">
            <template>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :height="tableHeight"
                @selection-change="handleSelectionChange"
                class="font-12"
                >
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="合同名称"
                  width="210"
                  show-overflow-tooltip>

                  <template #default="scope" ><a @click="showObj(scope.row)" class="pointer color-b1">{{ scope.row.name }}</a></template>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      advanceSearch:false,
      loading_first:false,
      showIndex:-999,
      formInline:{
        name:'',
        no:'',
        date:''
      },
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
          no: '202002030003',
          type: '采购合同补充',
          date: '2020-02-03',
          op:'张小鹏',
          optime:'2020-02-13'
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
      showObj(row){ 
          const {href} = this.$router.resolve({
              path: '/object/base?no='+row.no,
          })
          window.open(href, '_blank') 
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
  .page{text-align:right;
      }
}
</style>

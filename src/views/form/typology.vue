<template>
  <div class="bg-white h-100 dp">
         <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
      <label class="d-flex align-items-center pl-20">
        <i
          class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"
        ></i>
        <span>表单类型</span>
      </label>
      <div class="d-flex top-tool align-items-center">
        <el-button type="primary" @click="addform()">新建类型</el-button>
      </div>
    </div>





<div>
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
                  label="序号"
                  width="210"
                  show-overflow-tooltip
                >
                  <template #default="scope"
                    >
                    
                   
                    <p>{{scope.$index+1}}</p>
                    
                    </template
                  >
                </el-table-column>
                <el-table-column prop="no" label="分类名称"> </el-table-column>
               
             
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
</div>












  </div>



</template>

<script>
export default {
  data () {
    return {
      showIndex: -999,

        tableData: [
        {
          no: "未分类",
        
        },
        {
          no: "未分类",
        
        },
        {
          no: "未分类",
        
        },
        {
          no: "未分类",
        
        },
        {
          no: "合同类",
        },
         {
          no: "合同类",
        },
         {
          no: "合同类",
        },
         {
          no: "合同类",
        },
         {
          no: "合同类",
        },
      
      ],
    }
  },
  methods: {
    addform(){
      this.$router.push('/form/layout/template')

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
  mounted() {

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>

</style>

<template>
  <div id='app'>
        <div class="bg-white h-100 dp">
         <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
      <label class="d-flex align-items-center pl-20">
        <i
          class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"
        ></i>
        <span>编辑页面</span>
      </label>
      <div class="d-flex top-tool align-items-center">
     
      </div>
    </div>

    <div class="update-center-left-right">
        <div>
            <el-button type="danger">删除字段</el-button>
        </div>
        <div>
<el-button type="primary">添加字段</el-button>
 <el-button type="success">保存表单</el-button>
        </div>

    </div>


    <div class="footer-update">
        <div>
<el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        
        label="序号"
        width="180">

        <template slot-scope="scope">
            <div>
                {{ scope.$index }}
            </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="字段ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="hetong"
        label="字段名称">
      </el-table-column>

        <el-table-column
        prop="sjle"
        label="数据库名称">
      </el-table-column>
      <el-table-column
        prop="lex"
        label="类型">
      </el-table-column>
    </el-table>

        </div>
        <div>
            <div>编辑属性</div>
            <div>
                <div>字段类型</div>
                <div>单行文本</div>
            </div>

            <div>
                <div>字段名称</div>
                <div>合同名称</div>
            </div>

            <div>
                <div>字段ID</div>
                <div>data_1</div>
            </div>

            <div>
                <div>数据库名称</div>
                <div>HT-name</div>
            </div>

            <div>
                <div>数据验证</div>
                <div>下拉框</div>
            </div>

               <div>
                <div>
                    <div>
                    <input type="checkbox"/>提醒

                    </div>
                    <div>提醒设置</div>

                    </div>
                <div>下拉框</div>
            </div>
        </div>

    </div>








    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
          {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          },
           {
              title:'data_1',
              hetong:'合同分类',
              sjle:'HT-name',
              lex:'单行文本'
          }
      ]
    }
  },
  methods: {

  },
  mounted() {

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.footer-update{
    width: 100%;
    display: flex;
    div:nth-child(1){
        width: 70%;
    }
    >div:nth-child(2){
        width: 30%;
        >div{
            width: 100%;
            height: 40px;
            display: flex;
               width: 95%;

            margin-left: 5%;
            >div:nth-child(1){
                width: 30%;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
                
            }
            >div:nth-child(2){
                width: 70%;
        border: 1px solid #ccc;
          display: flex;
        justify-content: start;
        align-items: center;

            }
            
          
        }
        >div:nth-child(1){
            display: flex;
            align-items: center;
            background-color: aqua;
            height: 40px;
            width: 95%;
            margin-left: 5%;

        }
    }
}
.update-center-left-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px ;
    div{
        display: flex;
    }
}

</style>

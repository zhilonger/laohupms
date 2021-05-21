<template>
  <div class="bg-white h-100 dp">
         <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
      <label class="d-flex align-items-center pl-20">
        <i
          class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"
        ></i>
        <span>模板管理</span>
      </label>
      <div class="d-flex top-tool align-items-center">
        <el-button type="primary" @click="addform()">保存</el-button>
      </div>
    </div>

    <div class="center-template">

      <div class="center-template-left">

        <div>
          <div></div>
          <div>
            合同信息表
          </div>
           <div>
            合同新建模板
          </div>
          <div>
            合同编辑模板
          </div>
          <div>
            合同列表模板
          </div>
          <div>
            客户信息表
          </div>
           <div>
            客户新建模板
          </div>
          <div>
            客户编辑模板
          </div>
          <div>
            客户列表模板
          </div>

        </div>


          <div>

            <div>
              合同新建模板
            </div>

            <div v-for="(c,i) in List" :key="i">
              <div>{{c.title}}</div>
              <div></div>
              <div>{{c.title2}}</div>
              <div></div>
            </div>
          
        </div>
        

      </div>

        <div class="center-template-right">

          <div>编辑属性    <span>X</span></div>

          <div>
            <div>字段名称</div>
            <div>合同名称</div>
            <div></div>
          </div>

           <div>
            <div>字段ID</div>
            <div>data_1</div>
            <div></div>
          </div>
<div>
     <div>
            <input type="checkbox" name="" id="">显示到列表
          </div>
               <div>
            <input type="checkbox" name="" id="">添加到“模糊查询”
          </div>
               <div>
            <input type="checkbox" name="" id="">添加到“高级查询
          </div>
               <div>
            <input type="checkbox" name="" id="">添加到“更多帅选”
          </div>
    <div>
            <input type="checkbox" name="" id=""> 可排序
          </div>
</div>
     
      </div>



    </div>



    <el-dialog title="提示设置" :visible.sync="dialogFormVisible">

      <div class="loging-template">

        <div >
          <div>提醒方式</div>
          <div>
            <div v-for="(item,index) in list" :key="index">
                <div class=" loging-template-font-size">
                  <i  :class="item.ioc" ></i>
                </div>
                <div>
                  {{item.title}}
                </div>

            </div>

          </div>
        </div>

      </div>
  
  <div slot="footer" class="dialog-footer">
    <el-button  type="primary" @click="dialogFormVisible = false" size="small">确定</el-button>
    <el-button  @click="dialogFormVisible = false" size="small">取消</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title:'内部消息',
          ioc:'el-icon-chat-dot-round'
        },
        {
          title:'内部邮件',
          ioc:'el-icon-message'
        },
        {
          title:'手机短信',
          ioc:'el-icon-refrigerator'
        },
        {
          title:'手机app',
          ioc:'el-icon-mobile-phone'
        }
      ],
      dialogFormVisible:false,
      List:[
        {
          title:'合同名称',
          title2:'合同编号',
        },
        {
          title:'合同类型',
          title2:'总金额'
        },
        {
          title:'相关项目',
          title2:'相关客户'
        },
        {
          title:'AAA',
          title2:'合同金额'
        },
        {
          title:'CCC',
          title2:'总金额'
        },
        {
          title:'EEE',
          title2:'总金额'
        },
        {
          title:'GGG',
          title2:'总金额'
        },
        {
          title:'jjj',
          title2:'总金额'
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
.center-template{
  width: 100%;
  display: flex;
  margin: 20px 0;
  .center-template-left{
    width: 70%;
    display: flex;
    >div:nth-child(1){
      width: 30%;
      div{
        width: 100%;
        height: 40px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;

      }
    }
    >div:nth-child(2){
      width: 70%;
      >div:nth-child(1){
          width: 100%;
        height: 40px;
        font-size: 14px;
        display: flex;
        justify-content: start;
        align-items: center;
        background-color: #ccc;

      }
       div{
        width: 100%;
        height: 40px;
        font-size: 14px;
        display: flex;
        justify-content: start;
        align-items: center;

      }
    }
    
  }
  .center-template-right{
    width:25%;
    margin-left: 5%;
    >div:nth-child(1){
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: darkcyan;
    }
    >div:nth-child(2), >div:nth-child(3){
      width: 100%;
      height: 40px;
      display: flex;
      >div{
        width: 33.33%;
        height: 100%;border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    }
    >div:nth-child(4){
      width: 100%;
      display: flex;
      flex-direction: column;
      >div{
        margin: 20px 0;
      }
    }
  }
}
.loging-template{
  width: 100%;
  height: 400px;
  overflow: hidden auto;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  >div:nth-child(1){
    display: flex;
    margin-top:20px ;
    >div:nth-child(2){
      display: flex;
    }
  }

 .loging-template-font-size{
   font-size: 35px;
 }


}

</style>

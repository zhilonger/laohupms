<template>
  <div class="">
    <div class="content mt-20">
      <div class="el-row">
        <div class="el-col el-col-4 el-col-offset-6">
          <div class="grid-content">
            <div>简称</div>
            <div>全称</div>
            <div>所属部门</div>
            <div>上级部门</div>
            <div>协办人</div>
            <div>显示顺序</div>
            <div>部门ID</div>
            <div>部门编号</div>
            <div>在职人数/离职人数</div>
          </div>
        </div>
        <div class="el-col el-col-8">
          <div class="grid-content de-line">
            <div>{{ info.name }}</div>
            <div>{{ info.fullname }}</div>
            <div>
              <a href="">{{ info.belong }}</a>
            </div>
            <div>{{ info.upstep }}</div>
            <div>{{ info.op }}</div>
            <div>{{ info.sort }}</div>
            <div>{{ info.partId }}</div>
            <div>{{ info.partNum }}</div>
            <div>{{ info.onPeople }}/{{ info.offPeople }}</div>
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
        <el-form-item label="所属部门">
          <el-input v-model="form.belong"></el-input>
        </el-form-item>
        <el-form-item label="上级部门">
          <el-input v-model="form.upstep"></el-input>
        </el-form-item>
        <el-form-item label="协办人">
          <el-input v-model="form.op"></el-input>
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
          <input type="hidden" v-model="form.id"/>
          <el-button class="" @click="onSubmit('form')">{{diglogButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
   props: {
      fatherData: {}
    },
  data() {
    return {
      name: "",
      dialogVisible: false,
      diglogTitle:'新建部门',
      diglogButton:'保存',
      info: {
        name: "办公室",
        fullname: "办公室",
        belong: "百度集团有限公司",
        upstep: "街道办",
        op: "234",
        sort: "223",
        partId: "998",
        partNum: "123123123",
        onPeople: "234",
        offPeople: 23,
        id:23
      },
      form: {
          name: "办公室",
          fullname: "办公室",
          belong: "百度集团有限公司",
          upstep: "街道办",
          op: "234",
          sort: "223",
          partId: "998",
          partNum: "123123123",
          onPeople: "234",
          offPeople: 23,
          id:0
        },
        emptyForm:{
          name: "",
          fullname: "",
          belong: "",
          upstep: "",
          op: "",
          sort: "",
          partId: "",
          partNum: "", 
          id:0
        },
    };
  },
  created() {
    console.log('create')
    let q = this.fatherData;
    this.info = q;
  },

  watch: { 
  },
  methods: {
    reloadData(q){
      this.info = q; 
    },
    showAdd() {  
      this.dialogVisible=true;
      this.diglogTitle = '新建部门'; 
      this.form = this.emptyForm;
    },
    showEdit(formData) {  
      console.log(formData);
      this.form =formData;
      this.dialogVisible=true; 
      this.diglogTitle = '编辑部门';
    },
    onSubmit(formName) {
        if(this.form.id>0){
            for(let key  in this.form){
                if(this.info.key!=undefined){
                  this.info.key = this.form.key;
                }
            } 
            this.$emit('editForm',this.form.id,this.form);
        }else{ 
            this.$emit('addForm',this.form);
        } 
        var obj = this;
        obj.$message({
          message: '保存成功', 
          type: "success",
          duration:1000,
          onClose:function(){
             obj.dialogVisible=false;
          }
        }); 
      }
  },
};
</script>

<style lang="scss">
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
</style>

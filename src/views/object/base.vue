<template>
  <div>
    <div class="title d-flex align-items-center mt-2">
      <i class="iconfont iconvertical_line px-4"></i><span>基本信息</span>
    </div>
    <div class="content mt-20">
      <div class="el-row">
        <div class="el-col el-col-4">
          <div class="grid-content">
            <div>创建人</div>
            <div>项目名称</div>
            <div>项目类型</div>
            <div>客户名称</div>
            <div>关键需求</div>
          </div>
        </div>
        <div class="el-col el-col-8">
          <div class="grid-content de-line">
            <div>张经理</div>
            <div>2020年国家政府采购先进设备</div>
            <div>软件研发</div>
            <div><a href="">百度集团有限公司</a></div>
            <div>2020年国家政府采购先进设备</div>
          </div>
        </div>
        <div class="el-col el-col-4">
          <div class="grid-content">
            <div>创建日期</div>
            <div>项目编号</div>
            <div>项目状态</div>
            <div>合同名称</div>
          </div>
        </div>
        <div class="el-col el-col-8">
          <div class="grid-content de-line">
            <div>2019-03-04</div>
            <div>201003040001</div>
            <div>立项审批</div>
            <div><a href="">2020年国家政府采购先进设备合同</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="title d-flex align-items-center mt-20">
      <i class="iconfont iconvertical_line px-4"></i><span>相对方信息</span>
    </div>
    <div class="content mt-20">
      <div class="el-row">
        <div class="el-col el-col-4">
          <div class="grid-content">
            <div>项目经理</div>
            <div>开始日期</div>
          </div>
        </div>
        <div class="el-col el-col-8">
          <div class="grid-content de-line">
            <div>张三</div>
            <div>2019-04-05</div>
          </div>
        </div>
        <div class="el-col el-col-4">
          <div class="grid-content">
            <div>项目成员</div>
            <div>验收日期</div>
          </div>
        </div>
        <div class="el-col el-col-8">
          <div class="grid-content de-line">
            <div>李四、王五、冯二马</div>
            <div>2020-03-04</div>
          </div>
        </div>
        <div class="el-col el-col-4">
          <div class="grid-content">
            <div>客户对项目期望</div>
            <div>项目风险</div>
            <div>归档文件要求</div>
          </div>
        </div>
        <div class="el-col el-col-20">
          <div class="grid-content de-line">
            <div>完成客户要求的合同相关内容</div>
            <div>需求相对明确，项目不存在交付风险</div>
            <div>需求调研方案 采购合同 设计图纸 项目验收单</div>
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
      activeName: "first",
    };
  },
  created() {
    //this.$test();
  },
  methods: {},
};
</script>

<style lang="scss">
.title {
  ont-size: 14px;
  height: 40px;
  background-color: #f6f7f8;
  color: #4a4f5e;
}
.content {
  line-height: 40px;
  color: #303030;
  font-size: 12px;
  .de-line div {
    border-bottom: 1px solid #eceeef;
  }
}
</style>

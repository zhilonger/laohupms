<template>
  <div class="bg-white h-100 dp">
    <div class="header d-flex justify-content-between bg-g1 py-6 font-15">
      <label class="d-flex align-items-center pl-20">
        <i
          class="el-icon-s-order font-22 border-circle p-8 text-white d-block bg-b2 mr-10"
        ></i>
        <span>用户管理</span>
      </label>
      <div class="d-flex top-tool align-items-center" v-if="showMode == 1">
        <el-button type="primary" @click="addFunc()">新建用户</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
      <div class="d-flex top-tool align-items-center" v-if="showMode == 2">
        <el-button type="primary" @click="showObj(0)">编辑</el-button>
        <el-button type="danger" @click="deleteObj(0)">删除</el-button>
      </div>
    </div>
    <div class="main">
      <el-container class="main-content h-100">
        <el-aside :width="isCollapse ? '0' : '20%'">
          <div class="top-weg position-relative">
            <div class="top-input px-14 d-flex">
              <label class="font-14 bold">全部搜索</label>
              <input type="text" class="pr-28 pl-14 w-100" />
            </div>
            <i class="iconfont iconfangdajing pointer"></i>
          </div>
          <div class="menuList color-g2 font-12" :key="menuKey">
            <template v-for="(item, key) in menuList">
              <treelist
                :dataList="item"
                :activeid="activeid"
                @selectItem="selectItem"
              ></treelist>
            </template>
            <div class="userlist" v-if="activeid > 0">
              <ul>
                <li
                  :class="[
                    'd-flex',
                    'pr-0',
                    ' align-items-center',
                    ' pl-20',
                    { active: index == userActive },
                  ]"
                  v-for="(item, index) in userList"
                  @click="changeMode(2, index)"
                >
                  <img src="../../assets/images/headpic.png" /><span
                    class="pl-10"
                    >{{ item.name }}</span
                  >
                </li>
              </ul>
            </div>
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
                  label="合同名称"
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
                <el-table-column prop="no" label="合同编号"> </el-table-column>
                <el-table-column prop="type" label="合同类型">
                </el-table-column>
                <el-table-column prop="date" label="签订日期">
                </el-table-column>
                <el-table-column prop="op" label="归档人"> </el-table-column>
                <el-table-column prop="optime" label="归档时间">
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
                        ><span>清除密码</span>
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
          <template v-else>
            <div class="">
              <div class="content mt-20">
                <div class="el-row">
                  <div class="el-col el-col-4 el-col-offset-6">
                    <div class="grid-content">
                      <div>登录帐号</div>
                      <div>真实姓名</div>
                      <div>手机号</div>
                      <div>性别</div>
                      <div>在职状态</div>
                    </div>
                  </div>
                  <div class="el-col el-col-8">
                    <div class="grid-content de-line">
                      <div>{{ form.username }}</div>
                      <div>{{ form.name }}</div>
                      <div>{{ form.mobile }}</div>
                      <div>{{ form.sex }}</div>
                      <div>{{ form.state }}</div>
                    </div>
                  </div>
                </div>
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
  components: { treelist },
  data() {
    return {
      isCollapse: false,
      activeid: 0,
      userActive: 0,
      showMode: 1,
      showIndex: -999,
      menuKey: 1,
      loading: false,
      menuList: [
        {
          name: "江东分区",
          fullname: "华厦江东分区",
          upstep: 0,
          id: 1,
          sort: "223",
          partId: "998",
          partNum: "123123123",
          upid: 0,
          colipse: 0,
          child: [
            {
              name: "A部门",
              fullname: "行政机关部门",
              upstep: "华厦江东分区",
              sort: "223",
              partId: "998",
              colipse: 0,
              partNum: "123123123",
              id: 11,
              upid: 1,
              child: [
                {
                  name: "AA部门",
                  fullname: "aa机关部门",
                  upstep: "行政机关部门",
                  sort: "223",
                  colipse: 0,
                  partId: "998",
                  partNum: "123123123",
                  id: 111,
                  upid: 11,
                },
                {
                  name: "AB部门",
                  fullname: "ab机关部门",
                  upstep: "行政机关部门",
                  sort: "223",
                  colipse: 0,
                  partId: "998",
                  partNum: "123123123",
                  id: 112,
                  upid: 11,
                },
              ],
            },
            {
              name: "B部门",
              fullname: "bbbb",
              upstep: "华厦江东分区",
              sort: "223",
              partId: "998",
              colipse: 0,
              partNum: "123123123",
              id: 12,
              upid: 1,
            },
          ],
        },
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
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-01",
          op: "王志勇",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-02",
          op: "宋小鹏",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-03",
          op: "张鹏",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-04",
          op: "王鹏",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-05",
          op: "侯军",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-06",
          op: "立明",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-07",
          op: "凡高",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-08",
          op: "铁人",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-03",
          op: "吴敌勇",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-03",
          op: "片名",
          optime: "2020-02-13",
        },
        {
          name: "设备采购2020 采购补充合同",
          no: "202002030003",
          type: "采购合同补充",
          date: "2020-02-03",
          op: "大宁",
          optime: "2020-02-13",
        },
      ],
      userList: [
        { name: "张三", img: "" },
        { name: "李雷", img: "" },
        { name: "丁吵", img: "" },
        { name: "张三志", img: "" },
        { name: "王小刘", img: "" },
        { name: "百万家", img: "" },
      ],
    };
  },
  created() {
    //this.$test();
  },
  methods: {
    selectItem(ids) {
      var obj = this;
      this.activeid = ids;
      this.showMode = 1;
      // this.selectItemFunc(ids,this.menuList);
      this.loading = true;
      setTimeout(function () {
        obj.loading = false;
      }, 1000);
    },
    selectItemFunc(ids, menuList) {
      menuList.forEach((elem, index) => {
        if (elem.id == ids) {
          this.changeData(this.info, elem, 1);
          return false;
        } else if (elem.child != undefined) {
          this.selectItemFunc(ids, elem.child);
        }
      });
    },
    changeMode(mode, index = -99) {
      this.showMode = mode;
      this.fillData(this.form);
      this.userActive = index;
    },
    addFunc() {
      this.dialogVisible = true;
      this.diglogTitle = "新建用户";
      this.empetyData(this.form);
      this.form.op = "add";
    },
    showObj(tindex) {
      this.dialogVisible = true;
      this.diglogTitle = "编辑用户";
      this.fillData(this.form);
      this.form.op = "edit";
      this.form.id = tindex;
    },

    empetyData(elem) {
      elem.username = "";
      elem.name = "";
      elem.mobile = "";
      elem.password = "";
      elem.sex = "";
      elem.state = "";
      elem.depart = "";
      elem.role = "";
      elem.upstep = "";
      elem.num = "";
    },
    fillData(elem) {
      elem.username = "aisiguang";
      elem.name = "张四光";
      elem.mobile = "18865856585";
      elem.password = "445455";
      elem.sex = "男";
      elem.state = "离职";
      elem.depart = "国安局";
      elem.role = "会计师";
      elem.upstep = "FBI";
      elem.num = "23423";
    },
    deleteObj(tindex) {
      this.$confirm("确认删除该用户吗", "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(tindex, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    addForm(item) {
      let newObj = {
        name: item.username,
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
        name: item.username,
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
        },
      });
    },
  },
};
</script>

<style lang="scss">
.color-g2 {
  color: #494949;
}
.bg-b2 {
  background-color: rgb(33, 115, 70);
}
.dp {
  .header {
    height: 50px;
  }
  .main {
    height: calc(100% - 50px);
  }
  .el-aside {
    border-right: 1px solid #eaeaea;
    z-index: 9;
    .top-input {
      height: 46px;
      align-items: center;
      label {
        width: 76px;
      }
      input {
        flex: 1;
        height: 28px;
        border: 1px solid #d9d9d9;
      }
    }

    .top-weg > i {
      position: absolute;
      top: 14px;
      right: 23px;
    }
    .menuList {
      line-height: 26px;
      ul {
        margin: 0px;
        width: 100%;
        padding-left: 10px;
        li {
          cursor: pointer;
          padding: 0px 10px 0px 10px;
        }
        li.active {
          background-color: #def0ff;
          color: #018efb;
        }
        li:hover {
          background-color: #def0ff;
          color: #018efb;
        }
      }
    }
  }
  .left-right-layout-btn {
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
  .left-layout-btn {
    background: url(../../assets/images/leftTree-show.png) no-repeat -2px 0;
  }
  .left-layout-btn:hover {
    background: url(../../assets/images/leftTree-show-hover.png) no-repeat -2px 0;
  }
  .right-layout-btn {
    background: url(../../assets/images/leftTree-hide.png) no-repeat -2px 0;
  }
  .right-layout-btn:hover {
    background: url(../../assets/images/leftTree-hide-hover.png) no-repeat -2px 0;
  }
  .top-tool {
    .el-button {
      height: 31px;
      background-color: #2db7f5;
      padding: 5px 15px;
      border: none;
      font-size: 12px;
    }
    button.el-button--danger {
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
  form {
    .el-form-item__label {
      font-size: 12px;
    }
    .el-input {
      font-size: 12px;
    }
    .el-form-item {
      margin-bottom: 5px;
    }
    .el-form-item__label {
      line-height: 41px;
    }
  }
  button.el-button {
    height: 31px;
    background-color: #2db7f5;
    padding: 5px 15px;
    border: none;
    font-size: 12px;
    color: #fff;
  }
  .el-dialog__body {
    padding: 10px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .el-table {
    .wedget2 {
      padding: 8px;
      span {
        background-color: #007aff;
        color: #fff;
        padding: 8px;
      }
    }
  }
  .userlist {
    li {
      line-height: 30px;
    }
    li img {
      width: 23px;
      height: 23px;
    }
  }
}
</style>

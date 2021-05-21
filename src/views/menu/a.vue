<template>
  <div id="app">
    <div class="menu-home">
      <div
        v-for="(c, i) in list"
        :key="i"
        @click="tab(i)"
        :class="{ color: c.flex }"
      >
        {{ c.title }}
      </div>
    </div>

    <div class="menu-home-center-one" v-if="this.list[0].flex">
      <div class="menu-home-center-one-top">
        <div :style="{ width: widthone }" v-show="widthone">
          <input type="text" name="" id="" placeholder="查询菜单" />
          <i class="el-icon-search s"></i>
        </div>

        <div :style="{ width: widthtow }">
          <div>【{{ text }}】菜单权限设置</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              v-show="hierarchy == 1 || hierarchy == 4 ||hierarchy==5"
              @click="addcd"
              >添加菜单</el-button
            >
            <el-button type="primary" size="mini">统一下级排序</el-button>
          </div>
        </div>
      </div>

      <div class="menu-home-action-one-top">
        <div :style="{ width: widthone }" v-show="widthone">
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </div>

        <div :style="{ width: widthtow }">
          <div v-show="hierarchy == 1">
            <div>1 设置菜单排序后点击【统一下级排序】菜单排序生效。</div>
            <div>
              2 菜单设置最多只能创建三级菜单，因此第三级菜单不能建立下级菜单。
            </div>
          </div>

          <div class="menu-home-hierarchy-1" v-show="hierarchy > 1">
            <el-button size="mini" v-show="hierarchy == 2"
              @click="hierarchy=5" >增加子菜单</el-button
            >
            <el-button type="primary" size="mini" @click="addz1">提交</el-button>
          </div>

          <div class="menu-home-center-2" v-show="hierarchy == 4">
            <div>
              <div>菜单名称</div>
              <div>
                <el-input v-model="form.center" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>设置权限</div>
              <div class="elel-style">
                <!-- <div class="elel-icon" @click="remove"> <i class="el-icon-delete"></i> 清空</div>

           <div class="elel-left">
             <div v-for="(c,i) in Qxlist" :key="i">{{c.title}} <span class="span">X</span></div>
           </div> -->
                <div style="width: 250px" class="elel-style-colo">
                  <el-input placeholder="搜索角色" v-model="input2">
                    <template slot="append">
                      <div @click="loding" style="font-size: 20px">
                        <i class="el-icon-s-order"></i>
                      </div>
                    </template>
                  </el-input>
                </div>
              </div>
            </div>

            <div>
              <div>序号</div>
              <div>
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>分类</div>
              <div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div>展示平台</div>
              <div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="电脑端"></el-checkbox>
                  <el-checkbox label="移动端"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>



          <div class="menu-home-center-2" v-show="hierarchy == 5">
            <div>
              <div>菜单名称</div>
              <div>
                <el-input v-model="form.title" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>设置权限</div>
              <div class="elel-style">
                <!-- <div class="elel-icon" @click="remove"> <i class="el-icon-delete"></i> 清空</div>

           <div class="elel-left">
             <div v-for="(c,i) in Qxlist" :key="i">{{c.title}} <span class="span">X</span></div>
           </div> -->
                <div style="width: 250px" class="elel-style-colo">
                  <el-input placeholder="搜索角色" v-model="input2">
                    <template slot="append">
                      <div @click="loding" style="font-size: 20px">
                        <i class="el-icon-s-order"></i>
                      </div>
                    </template>
                  </el-input>
                </div>
              </div>
            </div>

            <div>
              <div>序号</div>
              <div>
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>分类</div>
              <div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div>展示平台</div>
              <div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="电脑端"></el-checkbox>
                  <el-checkbox label="移动端"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>

          <div class="menu-home-center-2" v-show="hierarchy == 2">
            <div>
              <div>菜单名称</div>
              <div>
                <el-input v-model="text" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>设置权限</div>
              <div class="elel-style">
                <div class="elel-icon" @click="remove">
                  <i class="el-icon-delete"></i> 清空
                </div>

                <div class="elel-left">
                  <div v-for="(c, i) in Qxlist" :key="i">
                    {{ c.title }} <span class="span">X</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>序号</div>
              <div>
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>分类</div>
              <div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>

            <div>
              <div>展示平台</div>
              <div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="电脑端"></el-checkbox>
                  <el-checkbox label="移动端"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>

          <div class="menu-home-center-2" v-show="hierarchy == 3">
            <div>
              <div>菜单名称</div>
              <div>
                <el-input v-model="text" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>继承上级权限</div>

              <div>
                <el-checkbox
                  v-model="checked"
                  @change="tabChecked"
                ></el-checkbox>
              </div>
            </div>

            <div v-if="!checked">
              <div>设置权限</div>
              <div class="elel-style">
                <div class="elel-icon" @click="remove">
                  <i class="el-icon-delete"></i> 清空
                </div>

                <div class="elel-left">
                  <div v-for="(c, i) in Qxlist" :key="i">
                    {{ c.title }} <span class="span">X</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>序号</div>
              <div>
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div>
              <div>展示平台</div>
              <div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="电脑端"></el-checkbox>
                  <el-checkbox label="移动端"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sd"
          @click="le"
          :style="{ left: widthone, top: '50%' }"
        ></div>
      </div>
    </div>

    <div class="menu-home-center-one" v-else>
      <div>
        <el-button class="div" size="mini">新增分类</el-button>
      </div>

      <div>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <div
                  @mouseleave="showIndex = -999"
                  @mouseover="showIndex = scope.$index"
                >
                  <i v-if="showIndex != scope.$index" class="el-icon-more"> </i>
                  <div class="wedget2 pointer" v-if="showIndex == scope.$index">
                    <!-- <span @click="showObj(scope.$index)">编辑</span
                        ><span
                          class="bg-danger"
                          @click="deleteObj(scope.$index)"
                          >删除</span
                        > -->
                    <el-button type="primary" size="mini">编程</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>

    <el-dialog title="角色选择" :visible.sync="dialogFormVisible">
      <div class="menu-loging-layout">
        <div>
          <div>
            <div>
              <el-input
                placeholder="搜索角色"
                v-model="input3"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div>
              <el-checkbox v-model="checked1">全部</el-checkbox>
            </div>
          </div>

          <div>
            <el-checkbox v-model="checked2" @change="qx">选择全部</el-checkbox>
          </div>
        </div>

        <div>
          <div
            v-for="(c, i) in Qxlist"
            :key="i"
            :style="{ color: c.fel == true ? '#63B0FF' : '' }"
            @click="clickADD(i)"
          >
            {{ c.title }}
          </div>
        </div>
      </div>

      <div class="menu-loging-layouts">
        <div>
          <div>已选择{{ this.Qxlists.length }}项</div>
          <div v-show="this.Qxlists.length > 0" @click="qxqb">
            <i class="el-icon-delete"></i> 取消全部
          </div>
        </div>

        <div>
          <div v-for="(c, i) in Qxlist" :key="i" v-show="c.fel == true">
            {{ c.title }} <span @click="removes(i)" class="remove">X</span>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addlist">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
center:'',title:''
      },
      input3: "",
      checked1: false,
      checked2: false,
      checked: false,
      checkList: ["电脑端", "移动端"],
      value: "综合办公",
      options: [
        {
          value: "综合办公",
          label: "综合办公",
        },
        {
          value: "业务应用",
          label: "业务应用",
        },
        {
          value: "设置管理",
          label: "设置管理",
        },
      ],
      list: [
        {
          title: "菜单管理",
          flex: true,
        },
        {
          title: "菜单分类管理",
          flex: false,
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      showIndex: -999,
      widthone: "18%",
      widthtow: "82%",
      data: [
        {
          label: "菜单",
          fel: 1,
          list: [],
          children: [
            {
              label: "流程管理",
              fel: 2,
              list: [],
              children: [
                {
                  label: "发起审批",
                  fel: 3,
                  list: [],
                },
              ],
            },
            {
              label: "文档中心",
              fel: 2,
              list: [],
              children: [
                {
                  label: "发起审批",
                  fel: 3,
                  list: [],
                },
              ],
            },
            {
              label: "考勤管理",
              fel: 2,
              list: [],
              children: [
                {
                  label: "发起审批",
                  fel: 3,
                  list: [],
                },
              ],
            },
            {
              label: "费用管理",
              fel: 2,
              list: [],
              children: [
                {
                  label: "发起审批",
                  fel: 3,
                  list: [],
                },
              ],
            },
            {
              label: "客户管理",
              fel: 2,
              list: [],
              children: [
                {
                  label: "发起审批",
                  fel: 3,
                  list: [],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      hierarchy: 1,
      text: "菜单",
      input: "",
      input1: "0",
      Qxlist: [
        {
          title: "OA管理员",
          fel: false,
        },
        {
          title: "总经理",
          fel: false,
        },
        {
          title: "部门经理",
          fel: false,
        },
        {
          title: "财务经理",
          fel: false,
        },
        {
          title: "行政经理",
          fel: false,
        },
        {
          title: "人事经理",
          fel: false,
        },
        {
          title: "职员",
          fel: false,
        },
      ],
      dialogFormVisible: false,
      Qxlists: [],
      input2:''
    };
  },
  methods: {
    addz1(){
         if(this.hierarchy==4){
           this.data[0].children.push({
              label: this.form.center,
              fel: 2,
              list: [],
           })
           this.hierarchy=1
         }

         if(this.hierarchy==5){
           this.data[0].children.forEach(res=>{
             if(res.label==this.text){

               res.children.push({
                    label: this.form.title,
                  fel: 3,
                  list: [],
               })



             }
           })
         }
    },
    addlist() {
      this.dialogFormVisible = false;
      this.Qxlist.forEach((res) => {
        res.fel = false;
      });
      this.Qxlists = [];
    },
    removes(i) {
      console.log(i);
      this.Qxlist[i].fel = false;
      this.Qxlists.splice(0, 1);
      if (this.Qxlists.length == this.Qxlist.length) {
        this.checked2 = true;
      } else {
        this.checked2 = false;
      }
    },
    clickADD(i) {
      if (this.Qxlist[i].fel == false) {
        this.Qxlist[i].fel = true;
        this.Qxlists.push(this.Qxlist[i]);

        if (this.Qxlists.length == this.Qxlist.length) {
          this.checked2 = true;
        } else {
          this.checked2 = false;
        }
      } else {
        this.Qxlist[i].fel = false;
        this.Qxlists.splice(i, 1);
        if (this.Qxlists.length == this.Qxlist.length) {
          this.checked2 = true;
        } else {
          this.checked2 = false;
        }
      }
    },
    qxqb() {
      this.Qxlists = [];
      this.Qxlist.forEach((res) => {
        res.fel = false;
      });
      this.checked2 = false;
    },
    qx(e) {
      console.log(e);
      this.Qxlists = [];
      this.checked2 = e;
      if (e == true) {
        this.Qxlist.forEach((res) => {
          res.fel = true;
          let s = {
            title: res.title,
          };

          this.Qxlists.push(s);
        });
      } else {
        this.Qxlist.forEach((res) => {
          res.fel = false;

          this.Qxlists = [];
        });
      }

      //
    },
    loding() {
      this.dialogFormVisible = true;
    },

    addcd() {
      this.hierarchy = 4;
    },
    tab(i) {
      this.list.forEach((res) => {
        res.flex = false;
      });
      this.list[i].flex = true;
      this.hierarchy = 1;
    },
    remove() {
      this.Qxlist = [];
    },
    le() {
      if (this.widthtow == "82%") {
        this.widthone = 0;
        this.widthtow = "100%";
      } else {
        this.widthone = "18%";
        this.widthtow = "82%";
      }
    },
    handleNodeClick(data) {
      console.log(data);
      this.hierarchy = data.fel;
      this.text = data.label;
      this.Qxlist = [
        {
          title: "OA管理员",
        },
        {
          title: "总经理",
        },
        {
          title: "部门经理",
        },
        {
          title: "财务经理",
        },
        {
          title: "行政经理",
        },
        {
          title: "人事经理",
        },
        {
          title: "职员",
        },
      ];
    },
    tabChecked(e) {
      this.checked = e;
    },
  },
  mounted() {},
  components: {},
};
</script>

<style lang='scss' scoped>
.menu-loging-layouts {
  width: 100%;
  height: 310px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    > div:nth-child(2) {
      color: #ccc;
      cursor: pointer;
    }
  }
  > div:nth-child(2) {
    width: 100%;
    display: flex;
    > div {
      margin: 0px 10px;
      cursor: pointer;
      padding: 10px;
      position: relative;
      .remove {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    > div:hover {
      background-color: #ccc;
      .remove {
        display: block;
      }
    }
  }
}
.menu-loging-layout {
  width: 100%;
  height: 310px;
  margin-top: -20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  > div:nth-child(1) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    > div:nth-child(1) {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  > div:nth-child(2) {
    width: 100%;
    display: flex;
    > div {
      margin: 10px 10px;
      cursor: pointer;
    }
    > div:hover {
      color: #4e89f8;
    }
  }
}
.elel-style-colo {
  cursor: pointer;
}
.menu-home-center-2 {
  width: 100%;
  padding: 0 20px;
  font-size: 14px;
  .elel-icon {
    width: 70px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .elel-left {
    display: flex;
    border-left: 1px solid #ccc;
    margin-left: 10px;
    > div {
      width: 80px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #ccc;
      margin: 0 10px;
      position: relative;
    }
    > div:hover {
      .span {
        display: block;
      }
    }
    .span {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translate(0, -50%);

      display: none;
    }
  }
  .elel-icon:hover {
    border: 1px solid #4e89f8;
    color: #4e89f8;
  }

  > div {
    width: 100%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    > div:nth-child(1) {
      width: 20%;
      text-indent: 2em;
    }
    > div:nth-child(2) {
      width: 80%;
      .el-select {
        width: 100%;
      }
    }
  }
  .elel-style {
    display: flex;
    align-items: center;
  }
}
.menu-home-hierarchy-1 {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
}
.menu-home-action-one-top {
  width: 100%;
  height: 83.5vh;
  display: flex;
  position: relative;

  > div:nth-child(1) {
    height: 100%;
    border-right: 1px solid #ccc;
    padding: 0 20px;
  }
  > div:nth-child(2) {
    height: 100%;

    > div:nth-child(1) {
      width: 100%;
      height: 60px;
      background-color: #ccc;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      justify-content: space-around;
      margin-top: 20px;
    }
  }
  .sd {
    position: absolute;
    width: 20px;
    height: 60px;

    background: url(data:image/png;base64,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)
      no-repeat -2px 0;
  }
}
.menu-home {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  display: flex;
  > div {
    padding: 10px;

    margin-left: 10px;
    font-size: 12px;
    cursor: pointer;
  }
  .color {
    border: 1px solid #4e89f8;
    color: #4e89f8;
  }
}

.menu-home-center-one {
  > div:nth-child(1) {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #ccc;
  }
}
.menu-home-center-one-top {
  width: 100%;
  border-bottom: 1px solid #ccc;

  > div:nth-child(1) {
    height: 40px;
    padding: 3px 10px;
    position: relative;
    input {
      width: 100%;
      height: 34px;
      font-size: 14px;
    }
    .s {
      position: absolute;
      right: 20px;
      top: 13px;
      font-size: 15px;
      text-indent: 2em;
    }
  }

  > div:nth-child(2) {
    height: 40px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    > div:nth-child(1) {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>

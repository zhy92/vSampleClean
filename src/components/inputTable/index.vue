<template>
  <div id="Cold_all">
    <div class="Cold_Left">
      <el-row>
        <el-col :span="24">
          <el-table
            size="mini"
            :data="tableDefaultData.data"
            border
            style="width: 100%;margin:auto"
            highlight-current-row
          >
            <el-table-column type="index"></el-table-column>
            <el-table-column
              v-for="(item, index) in master_user.columns"
              :label="item.title"
              :prop="item.key"
              :width="item.width"
              :key="index"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.isSet">
                  <el-input
                    type="textarea"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="scope.row[item.key]"
                  ></el-input>
                </span>
                <span v-else>{{ scope.row[item.key] }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <span
                  class="Insert_Row"
                  style="cursor: pointer;"
                  @click.stop="saveRow(scope.row, scope.$index)"
                  >保存</span
                >
                <span
                  class="Edit_Row"
                  style="cursor: pointer;"
                  @click="editRow(scope.row, scope.$index)"
                  >编辑</span
                >
                <span
                  class="Delete_Row"
                  style="cursor: pointer;"
                  @click="deleteRow(scope.$index, master_user.data)"
                  >删除</span
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="24">
          <div class="el-table-add-row" style="width: 99.2%;" @click="add()">
            <span>+ 添加</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  props: {
    tableDefaultData: Object
  },
  data() {
    return {
      master_user: {
        sel: null, //选中行
        columns: this.tableDefaultData.headers,
        bak: [
          {
            prop: "OutdoorTDB",
            label: "室外计算温度(℃)"
          },
          {
            prop: "IndoorTDB",
            label: "室内计算温度(℃)"
          },
          {
            prop: "TdbStartTime",
            label: "运行开始时间"
          },
          {
            prop: "TdbEndTime",
            label: "运行结束时间"
          }
        ],
        data: []
      }
    };
  },
  methods: {
    //基本输入列表
    add() {
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.error("请先保存当前编辑项");
      }
      let j = this.tableDefaultData.tableItems;
      this.master_user.data.push(j);
      this.master_user.sel = JSON.parse(JSON.stringify(j));
    },
    // eslint-disable-next-line
    saveRow (row, index) {
      //保存
      let data = JSON.parse(JSON.stringify(this.master_user.sel));
      for (let k in data) {
        row[k] = data[k];
      }
      row.isSet = false;
      this.$emit("getTableData", this.master_user.data);
    },
    editRow(row) {
      //编辑
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.error("请先保存当前编辑项");
      }
      this.master_user.sel = row;
      row.isSet = true;
    },
    deleteRow(index, rows) {
      //删除
      rows.splice(index, 1);
    }
  }
};
</script>

<template>
  <div>
    <el-row
      v-if="
        defaultSettings.useType &&
          defaultSettings.useType == 'add' &&
          !defaultSettings.hideAddBtn
      "
    >
      <el-col :span="6" :offset="18" class="textAlignRight mt10">
        <el-button
          type="primary"
          size="mini"
          @click="addDomain(defaultSettings.tableItems)"
        >
          新增
        </el-button>
      </el-col>
    </el-row>
    <div :class="['inputTable', defaultSettings.tableName]">
      <el-table
        ref="inputTable"
        size="mini"
        :data="defaultdatas"
        border
        style="width: 100%;margin:auto;"
        highlight-current-row
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="defaultSettings.selection" type="selection">
        </el-table-column>
        <el-table-column
          v-for="(item, index) in defaultSettings.headers"
          :label="item.title"
          :prop="item.key"
          :width="item.width"
          :key="index"
        >
          <template slot-scope="scope">
            <template v-if="item.inputTypeByDate">
              <el-select
                v-if="scope.row.inputType == 'select'"
                size="mini"
                :disabled="scope.row.disabled"
                :placeholder="scope.row.placeHolder || '请选择'"
                v-model="scope.row[item.key]"
                class="width100"
                auto-complete="off"
              >
                <el-option
                  v-for="opt in scope.row.data"
                  :key="opt.value"
                  :label="opt.label"
                  :value="opt.value"
                ></el-option>
              </el-select>
              <el-input
                v-else-if="scope.row.inputType == 'input'"
                size="mini"
                :disabled="scope.row.disabled"
                :placeholder="scope.row.placeHolder || '请输入'"
                v-model="scope.row[item.key]"
              ></el-input>
              <el-input-number
                v-else-if="scope.row.inputType == 'number'"
                size="mini"
                class="width100"
                :precision="scope.row.precision || 0"
                :disabled="scope.row.disabled"
                v-model="scope.row[item.key]"
                :step="scope.row.step || 1"
                :min="scope.row.min"
                :max="scope.row.max"
              ></el-input-number>
              <!-- 责任制默认最多3行文本域高度
                :autosize="!scope.row.rows"
                :rows="scope.row.rows"
               -->
              <el-input
                v-else
                type="textarea"
                size="mini"
                :autosize="{ maxRows: 3 }"
                :disabled="scope.row.disabled"
                :placeholder="scope.row.placeHolder || '请输入'"
                v-model="scope.row[item.key]"
              ></el-input>
            </template>
            <template v-else>
              <el-select
                v-if="item.inputType == 'select'"
                size="mini"
                :disabled="item.disabled"
                :multiple="item.multiple"
                :placeholder="item.placeHolder || '请选择'"
                v-model="scope.row[item.key]"
                class="width100"
                auto-complete="off"
                @change="
                  handleIptTableSelectChange(
                    item.key,
                    scope.$index,
                    scope.row[item.key]
                  )
                "
              >
                <el-option
                  v-for="opt in scope.row[item.key + '__selectOption']
                    ? scope.row[item.key + '__selectOption']
                    : item.data"
                  :key="opt.value"
                  :label="opt.label"
                  :value="opt.value"
                  :disabled="opt.disabled"
                ></el-option>
              </el-select>
              <el-input
                v-else-if="item.inputType == 'input'"
                size="mini"
                :disabled="item.disabled"
                :placeholder="item.placeHolder || '请输入'"
                v-model="scope.row[item.key]"
                :title="scope.row[item.key]"
              ></el-input>
              <el-input-number
                v-else-if="item.inputType == 'number'"
                size="mini"
                class="width100"
                :precision="item.precision || 0"
                :disabled="item.disabled"
                v-model="scope.row[item.key]"
                :title="scope.row[item.key]"
                :step="item.step"
                :min="item.min"
                :max="item.max"
              ></el-input-number>
              <el-input
                v-else-if="item.inputType == 'textarea'"
                type="textarea"
                size="mini"
                :title="scope.row[item.key]"
                :autosize="{ maxRows: 3 }"
                :disabled="item.disabled"
                :placeholder="item.placeHolder || '请输入'"
                v-model="scope.row[item.key]"
              ></el-input>
              <template v-else>
                {{ scope.row[item.key] }}</template
              >
            </template>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          class="textAlignCenter"
          width="150"
          v-if="defaultSettings.useType == 'add'"
        >
          <template slot-scope="scope">
            <el-button
              v-show="!scope.row.hideDelBtn"
              type="danger"
              size="mini"
              @click="removeDomain(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputTable",
  props: {
    defaultSettings: {
      type: Object
    },
    defaultdatas: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedList: {
      type: Array,
      default() {
        return [];
      }
    },
    formItemName: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.toggleSelection(this.selectedList);
  },
  methods: {
    // 添加删除打分项
    removeDomain(item) {
      if (this.defaultdatas.length <= 1) {
        this.defaultdatas.pop();
        this.defaultdatas.push(this.defaultSettings.tableItems);
        return false;
      }
      var index = this.defaultdatas.indexOf(item);
      if (index !== -1) {
        this.defaultdatas.splice(index, 1);
      }
    },
    addDomain(item) {
      let newObj = JSON.parse(JSON.stringify(item));
      this.defaultdatas.push(newObj);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs["inputTable"].toggleRowSelection(row, true);
        });
      } else {
        this.$refs["inputTable"].clearSelection();
      }
    },
    // inputtable change事件回调，直接触发
    handleIptTableSelectChange(key, rowIdx, val) {
      this.$emit("tableSelectChange", this.defaultSettings.linkName, {
        key,
        index: rowIdx,
        value: val,
        defaultdatas: this.defaultdatas
      });
    },
    handleSelectionChange(val) {
      this.$emit(
        "handleTableMutiChecked",
        val,
        this.defaultSettings.selectedListName
      );
    }
  }
};
</script>

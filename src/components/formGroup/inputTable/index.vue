<template>
  <div>
    <div :class="['inputTable', defaultSettings.tableName]">
      <el-table
        ref="inputTable"
        size="mini"
        :data="defaultdatas"
        border
        style="width: 100%;margin:auto;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="defaultSettings.selection" type="selection">
        </el-table-column>
        <el-table-column v-if="defaultSettings.expand" type="expand">
          <template slot-scope="expandDataRow">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-circle-plus-outline"
              @click="
                handleAddDetailInfo(
                  expandDataRow.row[defaultSettings.expandContent],
                  defaultSettings.expandAddEmitParent
                )
              "
              >添加</el-button
            >
            <el-table
              ref="inputTableDetail"
              size="mini"
              class="mt10 mb10 inputTableExpand"
              :data="expandDataRow.row[defaultSettings.expandContent]"
              border
              style="width: 100%;margin:auto;"
            >
              <template
                v-for="(expItem,
                expItemIdx) in defaultSettings.expandKeyValueArr"
              >
                <el-table-column
                  v-if="expItem.value != 'operate'"
                  :label="expItem.label"
                  :prop="expItem.value"
                  :width="expItem.width"
                  :key="expItemIdx"
                  class="inputTableExpand"
                >
                  <template slot-scope="expItemRow">
                    <el-form>
                      <el-form-item
                        label=""
                        style="margin-bottom:0 !important;"
                      >
                        <el-select
                          v-if="expItem.inputType == 'select'"
                          size="mini"
                          :disabled="expItem.disabled"
                          :filterable="true"
                          :multiple="expItem.multiple"
                          :placeholder="expItem.placeHolder || '请选择'"
                          v-model="expItemRow.row[expItem.value]"
                          class="width100"
                          auto-complete="off"
                          @change="
                            handleIptTableSelectChange(
                              expItem.value,
                              expItemRow.$index,
                              expItemRow.row[expItem.value],
                              expandDataRow.row[defaultSettings.expandContent],
                              expandDataRow.row
                            )
                          "
                        >
                          <el-option
                            v-for="opt in expItemRow.row[
                              expItem.value + '__selectOption'
                            ]
                              ? expItemRow.row[expItem.value + '__selectOption']
                              : expItem.data"
                            :key="opt.value"
                            :label="opt.label"
                            :value="opt.value"
                            :disabled="opt.disabled"
                          ></el-option>
                        </el-select>
                        <el-input
                          v-else-if="expItem.inputType == 'input'"
                          size="mini"
                          :disabled="expItem.disabled"
                          :placeholder="expItem.placeHolder || '请输入'"
                          v-model="expItemRow.row[expItem.value]"
                          :title="expItemRow.row[expItem.value]"
                          @change="
                            handleIptTableSelectChange(
                              expItem.value,
                              expItemRow.$index,
                              expItemRow.row[expItem.value],
                              expandDataRow.row[defaultSettings.expandContent],
                              expandDataRow.row
                            )
                          "
                        ></el-input>
                        <el-input-number
                          v-else-if="expItem.inputType == 'number'"
                          size="mini"
                          :controls="expItem.controls == 'false' ? false : true"
                          class="width100"
                          :precision="expItem.precision || 0"
                          :disabled="expItem.disabled"
                          v-model="expItemRow.row[expItem.value]"
                          :title="expItemRow.row[expItem.value]"
                          :step="expItem.step"
                          :min="
                            expItemRow.row.minNumber
                              ? expItemRow.row.minNumber
                              : expItem.min
                          "
                          :max="
                            expItemRow.row.maxNumber
                              ? expItemRow.row.maxNumber
                              : expItem.max
                          "
                          @change="
                            handleIptTableSelectChange(
                              expItem.value,
                              expItemRow.$index,
                              expItemRow.row[expItem.value],
                              expandDataRow.row[defaultSettings.expandContent],
                              expandDataRow.row
                            )
                          "
                        ></el-input-number>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  v-else
                  :label="expItem.label"
                  :prop="expItem.value"
                  :width="expItem.width"
                  :key="expItemIdx"
                >
                  <template slot-scope="expItemRow">
                    <el-button
                      type="danger"
                      size="mini"
                      @click="
                        handleRemoveDetailInfo(
                          expandDataRow.row[defaultSettings.expandContent],
                          expItemRow.$index
                        )
                      "
                    >
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </template>
            </el-table>
          </template>
        </el-table-column>
        <template v-for="(item, index) in defaultSettings.headers">
          <el-table-column
            v-if="!item.hideItem"
            :label="item.title"
            :prop="item.key"
            :width="item.width"
            :key="index"
          >
            <template slot-scope="scope">
              <template v-if="rules && rules[item.key]">
                <el-form-item
                  label-width="0px"
                  :prop="
                    item.prop
                      ? defaultSettings.name +
                        '.' +
                        scope.$index +
                        '.' +
                        item.prop
                      : defaultSettings.name +
                        '.' +
                        scope.$index +
                        '.' +
                        item.key
                  "
                  :rules="rules[item.key] || {}"
                  :show-message="true"
                >
                  <el-select
                    v-if="item.inputType == 'select'"
                    size="mini"
                    :disabled="
                      scope.row[item.key + '__options']
                        ? scope.row[item.key + '__options'].disabled
                        : item.disabled
                    "
                    :multiple="item.multiple"
                    :clearable="item.clearable"
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
                    :disabled="
                      scope.row[item.key + '__options']
                        ? scope.row[item.key + '__options'].disabled
                        : item.disabled
                    "
                    :clearable="item.clearable"
                    :placeholder="item.placeHolder || '请输入'"
                    v-model="scope.row[item.key]"
                    :title="scope.row[item.key]"
                    @change="
                      handleIptTableSelectChange(
                        item.key,
                        scope.$index,
                        scope.row[item.key]
                      )
                    "
                  ></el-input>
                  <el-input-number
                    v-else-if="item.inputType == 'number'"
                    size="mini"
                    class="width100"
                    :controls="item.controls == 'false' ? false : true"
                    :precision="item.precision || 0"
                    :disabled="
                      scope.row[item.key + '__options']
                        ? scope.row[item.key + '__options'].disabled
                        : item.disabled
                    "
                    v-model="scope.row[item.key]"
                    :title="scope.row[item.key]"
                    :step="item.step"
                    :min="item.min"
                    :max="item.max"
                    @change="
                      handleIptTableSelectChange(
                        item.key,
                        scope.$index,
                        scope.row[item.key]
                      )
                    "
                  ></el-input-number>
                  <el-date-picker
                    v-else-if="item.inputType == 'date'"
                    class="width100"
                    v-model="scope.row[item.key]"
                    :type="item.dateType"
                    :range-separator="item.dateRangeSeparator"
                    :start-placeholder="item.dateStartPlaceholder"
                    :end-placeholder="item.dateEndPlaceholder"
                    :format="item.format"
                    :value-format="item.valueFormat"
                    :disabled="
                      scope.row[item.key + '__options']
                        ? scope.row[item.key + '__options'].disabled
                        : item.disabled
                    "
                  ></el-date-picker>
                  <el-input
                    v-else-if="item.inputType == 'textarea'"
                    type="textarea"
                    size="mini"
                    :title="scope.row[item.key]"
                    :autosize="{ maxRows: 3 }"
                    :disabled="
                      scope.row[item.key + '__options']
                        ? scope.row[item.key + '__options'].disabled
                        : item.disabled
                    "
                    :placeholder="item.placeHolder || '请输入'"
                    v-model="scope.row[item.key]"
                  ></el-input>
                  <template
                    v-else-if="
                      item.inputType == 'button' && scope.row[item.key]
                    "
                  >
                    <div class="textAlignCenter">
                      <el-button
                        v-for="button in scope.row[item.key]"
                        :key="button.flag"
                        :type="button.type || 'primary'"
                        size="mini"
                        @click="
                          handleInputTableItem(
                            item.key,
                            scope.$index,
                            scope.row[item.key],
                            button.flag
                          )
                        "
                        >{{ button.text }}</el-button
                      >
                    </div>
                  </template>
                  <template v-else>
                    {{ scope.row[item.key] }}</template
                  >
                </el-form-item>
              </template>
              <template v-else>
                <el-form-item label-width="0px">
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
                    @change="
                      handleIptTableSelectChange(
                        item.key,
                        scope.$index,
                        scope.row[item.key]
                      )
                    "
                  ></el-input>
                  <el-input-number
                    v-else-if="item.inputType == 'number'"
                    type="number"
                    size="mini"
                    :controls="item.controls == 'false' ? false : true"
                    class="width100"
                    :precision="item.precision || 0"
                    :disabled="item.disabled"
                    v-model="scope.row[item.key]"
                    :title="scope.row[item.key]"
                    :step="item.step"
                    :min="scope.row.minNumber ? scope.row.minNumber : item.min"
                    :max="
                      scope.row[item.maxString]
                        ? scope.row[item.maxString]
                        : item.max
                    "
                    @change="
                      handleIptTableSelectChange(
                        item.key,
                        scope.$index,
                        scope.row[item.key]
                      )
                    "
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
                  <el-date-picker
                    v-else-if="item.inputType == 'date'"
                    v-model="scope.row[item.key]"
                    :title="scope.row[item.key]"
                    size="mini"
                    class="width100"
                    :type="item.dateType"
                    :range-separator="item.dateRangeSeparator"
                    :start-placeholder="item.dateStartPlaceholder"
                    :end-placeholder="item.dateEndPlaceholder"
                    :format="item.format"
                    :value-format="item.valueFormat"
                    :disabled="item.disabled"
                  ></el-date-picker>
                  <template v-else>
                    {{ scope.row[item.key] }}</template
                  >
                </el-form-item>
              </template>
            </template>
          </el-table-column>
        </template>

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
    rules: {
      type: Object,
      default() {
        return null;
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
  updated() {
    if (this.selectedList && this.selectedList.length > 0) {
      this.toggleSelection(this.selectedList);
    }
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
    handleIptTableSelectChange(key, rowIdx, val, data, subdata) {
      if (!data) {
        this.$emit("tableSelectChange", this.defaultSettings.linkName, {
          key,
          index: rowIdx,
          value: val,
          defaultdatas: this.defaultdatas
        });
      } else {
        this.$emit("tableSelectChange", this.defaultSettings.linkName, {
          key,
          index: rowIdx,
          value: val,
          defaultdatas: data,
          subData: subdata
        });
      }
    },
    handleSelectionChange(val) {
      this.$emit(
        "handleTableMutiChecked",
        val,
        this.defaultSettings.selectedListName
      );
    },
    handleRemoveDetailInfo(row, idx) {
      row.splice(idx, 1);
    },
    handleAddDetailInfo(row, expandAddEmitParent) {
      if (expandAddEmitParent == "true") {
        this.$emit("expandAddEmitParent", row);
        return false;
      }
      let newObj = this.$globalFnc.deepCopy(
        this.defaultSettings.expandAddObject
      );
      if (row.length > 0) {
        if (row[0].emmsStockDtlId__selectOption) {
          newObj.emmsBasMaterialSpecId = row[0].emmsBasMaterialSpecId;
          newObj.emmsStockDtlId__selectOption =
            row[0].emmsStockDtlId__selectOption;
        }
      }
      row.push(newObj);
    }
  }
};
</script>

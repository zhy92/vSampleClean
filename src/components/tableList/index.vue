<template>
  <div class="table-list">
    <!-- @expand-change="handleExpandTableRow" 点击展开收缩所有树节点 -->
    <el-table
      class="tableClass width100"
      :ref="tablelistSettings.tableSettingOptions.ref"
      :data="tablelistSettings.tableDatas"
      :tooltip-effect="
        tablelistSettings.tableSettingOptions.tooltipEffect || 'dark'
      "
      @selection-change="handleSelectionChange"
      :row-key="tablelistSettings.tableSettingOptions.rowKey"
      :row-class-name="tablelistSettings.tableSettingOptions.rowClassName"
      :header-row-class-name="
        tablelistSettings.tableSettingOptions.headerRowClassName
      "
      :show-summary="tablelistSettings.tableSettingOptions.showSummary"
      :border="tablelistSettings.tableSettingOptions.border || true"
      :default-expand-all="
        tablelistSettings.tableSettingOptions.defaultExpandAll || false
      "
      :tree-props="tablelistSettings.tableSettingOptions.treeProps"
    >
      <el-table-column
        v-if="tablelistSettings.tableSettingOptions.isMultipleTable"
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        v-if="tablelistSettings.tableSettingOptions.isShowIndex || false"
        type="index"
        width="50"
        :label="tablelistSettings.tableSettingOptions.showIndexHeader || ''"
      >
      </el-table-column>
      <el-table-column
        v-if="tablelistSettings.tableSettingOptions.hasExpandContent"
        type="expand"
      >
        <template slot-scope="expandDataRow">
          <div
            v-if="
              !tablelistSettings.tableSettingOptions.expandContentTypeSpecial
            "
            :class="[
              tablelistSettings.tableSettingOptions.expandContentClass,
              'table-list-expandbox'
            ]"
          >
            <el-form
              label-position="left"
              :class="[
                tablelistSettings.tableSettingOptions.expandItemClass,
                'table-list-expandbox-item'
              ]"
              v-for="expandItemdata in expandDataRow.row[
                tablelistSettings.tableSettingOptions.expandContent
              ]"
              :key="expandItemdata.sysId"
            >
              <el-form-item
                v-for="expandItemlab in tablelistSettings.tableSettingOptions
                  .expandContentLables"
                :key="expandItemlab.key"
                :label="expandItemlab.value"
              >
                <span>{{ expandItemdata[expandItemlab.key] }}</span>
              </el-form-item>
            </el-form>
          </div>
          <div
            v-else-if="
              tablelistSettings.tableSettingOptions.expandContentTypeSpecial
            "
          >
            <el-form
              label-position="left"
              :class="[
                tablelistSettings.tableSettingOptions.expandItemClass,
                'table-list-expandbox-item'
              ]"
              v-for="expandItemdata in expandDataRow.row[
                tablelistSettings.tableSettingOptions.expandContent
              ]"
              :key="expandItemdata.sysId"
            >
              <el-form-item
                v-for="expandItemlab in tablelistSettings.tableSettingOptions
                  .expandContentLables"
                :key="expandItemlab.key"
                :label="expandItemlab.value"
              >
                <div v-if="expandItemlab.type === 'table'">
                  <el-table
                    :data="expandItemdata[expandItemlab.key]"
                    :border="true"
                    :header-row-style="{ height: '30px', lineHeight: '30px' }"
                  >
                    <template v-for="subHeads in expandItemlab.subHeaders">
                      <el-table-column
                        :key="subHeads.prop"
                        :prop="subHeads.prop"
                        :label="subHeads.label"
                        :width="subHeads.width"
                        :show-overflow-tooltip="false"
                      >
                        <template slot-scope="scope">{{
                          scope.row[subHeads.prop]
                        }}</template>
                      </el-table-column>
                    </template>
                  </el-table>
                </div>
                <div
                  v-else-if="
                    expandItemlab.type === 'fileshowList' &&
                      expandItemdata[expandItemlab.key]
                  "
                >
                  <fileshowList
                    :defaultSettings="expandItemlab.fileSettings || {}"
                    :defaultdatas="expandItemdata[expandItemlab.key]"
                  />
                </div>
                <span v-else>{{ expandItemdata[expandItemlab.key] }}</span>
              </el-form-item>
            </el-form>
          </div>
          <div v-else></div>
        </template>
      </el-table-column>

      <template
        v-for="head in tablelistSettings.tableSettingOptions.headerOptions"
      >
        <el-table-column
          :key="head.prop"
          :label="head.lable"
          :class-name="
            head.propType == 'operateBtns'
              ? 'cellVisible textAlignCenter'
              : 'normalCells'
          "
          :width="head.propType == 'operateBtns' ? '110px' : head.width"
          :show-overflow-tooltip="
            head.columnTooltip
              ? false
              : tablelistSettings.tableSettingOptions.hidelongItem || true
          "
          v-if="!head.isHide && !head.children"
        >
          <div slot-scope="scope">
            <a
              v-if="head.clickable"
              class="cursor textColorLightBlue width100 displayInlineBlock"
              @click="
                handleItemName(
                  scope.row[head.clickVarKey],
                  head.clickType || '',
                  scope.row,
                  scope.row[head.prop]
                )
              "
            >
              {{ scope.row[head.prop] }}
            </a>
            <template v-else>
              <template v-if="head.propType == 'operateBtns'">
                <template v-if="head.isExpand == 'true'">
                  <template v-for="operateBtn in scope.row[head.prop]">
                    <el-button
                      v-show="
                        !operateBtn.showFlag || operateBtn.showFlag == 'true'
                      "
                      :class="[operateBtn.text == '删除' ? 'text-danger' : '']"
                      :key="operateBtn.type"
                      :disabled="operateBtn.disabled"
                      size="mini"
                      type="text"
                      @click.native.prevent="
                        handleRowButton(scope.row, operateBtn)
                      "
                    >
                      {{ operateBtn.text }}
                    </el-button>
                  </template>
                </template>
                <template v-else>
                  <el-popover
                    v-if="scope.row[head.prop].length > 1"
                    placement="left"
                    trigger="click"
                  >
                    <!-- 这里向下for循环之内的全部复制替换el-popover可在table直接显示按钮 -->
                    <template v-for="operateBtn in scope.row[head.prop]">
                      <template v-if="!operateBtn.isIcon">
                        <!-- <template v-if="operateBtn.styleType && operateBtn.styleType!='text'"> -->
                        <el-button
                          v-show="
                            !operateBtn.showFlag ||
                              operateBtn.showFlag == 'true'
                          "
                          :class="operateBtn.className"
                          :key="operateBtn.type"
                          :disabled="operateBtn.disabled"
                          size="mini"
                          :type="operateBtn.styleType"
                          @click.native.prevent="
                            handleRowButton(scope.row, operateBtn)
                          "
                        >
                          {{ operateBtn.text }}
                        </el-button>
                      </template>
                      <template v-else>
                        <!-- 这里应该是字体图标按钮，但是责任制要统一改掉字体变成文字，为了方便，暂时这样处理，新项目请按照是否字体判断 -->
                        <el-button
                          v-show="
                            !operateBtn.showFlag ||
                              operateBtn.showFlag == 'true'
                          "
                          :class="[
                            operateBtn.text == '删除' ? 'text-danger' : ''
                          ]"
                          :key="operateBtn.type"
                          :disabled="operateBtn.disabled"
                          size="mini"
                          type="text"
                          @click.native.prevent="
                            handleRowButton(scope.row, operateBtn)
                          "
                        >
                          {{ operateBtn.text }}
                        </el-button>
                        <!-- <em
                      :class="[operateBtn.icon, operateBtn.class, 'cursor']"
                      @click="handleRowButton(scope.row, operateBtn)"
                      :key="operateBtn.type"
                      :title="operateBtn.text"
                      :disabled="operateBtn.disabled"
                    ></em> -->
                      </template>
                    </template>
                    <el-button size="mini" type="text" slot="reference">
                      展开操作组
                    </el-button>
                  </el-popover>
                  <template v-else-if="scope.row[head.prop].length == 1">
                    <template v-for="operateBtn in scope.row[head.prop]">
                      <el-button
                        v-show="
                          !operateBtn.showFlag || operateBtn.showFlag == 'true'
                        "
                        :class="[
                          operateBtn.text == '删除' ? 'text-danger' : ''
                        ]"
                        :key="operateBtn.type"
                        :disabled="operateBtn.disabled"
                        size="mini"
                        type="text"
                        @click.native.prevent="
                          handleRowButton(scope.row, operateBtn)
                        "
                      >
                        {{ operateBtn.text }}
                      </el-button>
                    </template>
                  </template>
                </template>
              </template>
              <template v-else-if="head.propType == 'statusDot'">
                <circleDot :status="scope.row[head.prop]" />
              </template>
              <template v-else-if="head.propType == 'timeFormart'">
                {{ scope.row[head.prop] | formatdate }}
              </template>
              <template v-else>
                <template
                  v-if="
                    typeof scope.row[head.prop] == 'number' ||
                      scope.row[head.prop]
                  "
                >
                  <template v-if="!head.columnTooltip">
                    <div class="textEllipsis width100 overflowHidden">
                      {{ scope.row[head.prop] }}
                    </div>
                  </template>

                  <!-- 如需要，单独判断单元格head配置显示 -->
                  <el-tooltip v-else effect="dark" placement="top">
                    <div v-html="scope.row[head.prop]" slot="content"></div>
                    <div
                      class="textEllipsis width100 overflowHidden"
                      style="height: 16px;line-height: 16px;"
                      v-html="scope.row[head.prop]"
                    ></div>
                  </el-tooltip>
                </template>
                <template v-else>{{ "—" }}</template>
              </template>
            </template>
          </div>
        </el-table-column>
        <el-table-column
          :key="head.prop"
          :label="head.lable"
          v-else-if="!head.isHide && head.children"
        >
          <tableColumn
            v-for="(headItem, headIdx) in head.children"
            :key="'col-' + headIdx"
            :head="headItem"
          ></tableColumn>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import tableColumn from "./tableColumn";
import circleDot from "@/components/circleDot";
import fileshowList from "@/components/formGroup/fileList";

export default {
  name: "tableList",
  props: {
    tablelistSettings: Object
  },
  components: {
    tableColumn,
    circleDot,
    fileshowList
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs[
            this.tablelistSettings.tableSettingOptions.ref
          ].toggleRowSelection(row, true);
        });
      } else {
        this.$refs[
          this.tablelistSettings.tableSettingOptions.ref
        ].clearSelection();
      }
    },
    handleExpandTableRow(row, expandObj) {
      if (!this.tablelistSettings.tableSettingOptions.hasExpandContent) {
        if (
          this.tablelistSettings.tableSettingOptions.treeProps &&
          row.asmSchemeId
        ) {
          let expanddata = [];
          if (this.tablelistSettings.tableDatas.length > 1) {
            this.tablelistSettings.tableDatas.map(dataItem => {
              if (dataItem.asmSchemeId == row.asmSchemeId) {
                expanddata.push(dataItem);
              }
            });
          } else {
            expanddata = this.$globalFnc.deepCopy(
              this.tablelistSettings.tableDatas
            );
          }
          this.toggleRowExpansion_forAll(expanddata, expandObj);
        }
      } else {
        return false;
      }
    },
    toggleRowExpansion_forAll(data, isExpansion) {
      data.forEach(item => {
        this.$refs[
          this.tablelistSettings.tableSettingOptions.ref
        ].toggleRowExpansion(item, isExpansion);
        if (item.children && item.children.length > 0) {
          this.toggleRowExpansion_forAll(item.children, isExpansion);
        }
      });
    },
    handleSelectionChange(val) {
      this.$emit("handleTableMutiChecked", val);
    },
    handleSelect(selection, row) {
      let selectArr = [];
      if (selectArr.indexOf(row) === -1) {
        selectArr = this.filterSelect(selection);
        // 正反选， 过滤后有值勾选，空值清除所有，
        if (selectArr.length) {
          this.toggleSelection(selectArr);
        } else {
          // 清除所有
          this.$refs[
            this.tablelistSettings.tableSettingOptions.ref
          ].clearSelection(selection);
        }
      }
    },
    handleSelectAll(selection) {
      let arr = this.filterSelect(selection);
      // 正反选， 过滤后有值勾选，空值清除所有，
      if (arr.length) {
        this.toggleSelection(arr);
      } else {
        // 清除所有
        this.$refs[
          this.tablelistSettings.tableSettingOptions.ref
        ].clearSelection(selection);
      }
    },
    handleRowButton(id, type) {
      this.$emit("handleTableRowButton", id, type);
    },
    handleItemName(id, type, row, colData) {
      this.$emit("handleTableItem", id, type, row, colData);
    },
    filterSelect(selection) {
      let arr = []; // 循环children取值
      function filterData(val) {
        arr.push(val);
        if (val.children) {
          val.children.map(item => {
            filterData(item);
          });
        }
      } // 源数据中取出选中的数据
      this.tablelistSettings.tableDatas.map(item => {
        selection.map(val => {
          if (val.id === item.id) {
            filterData(val);
          }
        });
      });
      return arr;
    }
  }
};
</script>

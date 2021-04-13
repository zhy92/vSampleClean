<template>
  <div class="form-group">
    <el-form
      ref="formItems"
      :model="formGroupSettings.formGroupValues"
      :rules="formGroupSettings.rules"
      label-width="80px"
      style="overflow: hidden;"
    >
      <el-row>
        <!-- <el-col v-if="formGroupSettings.fullScreen" :span="24"> -->
        <el-col :span="formGroupSettings.fullScreen ? 24 : 20">
          <el-col
            v-for="formItemBlock in formGroupSettings.formGroupList"
            :key="formItemBlock.name"
            :span="formItemBlock.span"
          >
            <!-- item:inputHidden -->
            <el-form-item
              v-if="
                formItemBlock.type == 'inputHidden' && !formItemBlock.hideItem
              "
              :label="formItemBlock.label"
              :label-width="formItemBlock.width"
              :prop="formItemBlock.name"
              class="displayNone"
            >
              <el-input
                :show-password="formItemBlock.password"
                :disabled="formItemBlock.disabled"
                v-model="formGroupSettings.formGroupValues[formItemBlock.name]"
              ></el-input>
            </el-form-item>
            <el-row
              class="form-group-blocks"
              v-if="formItemBlock.type == 'block' && !formItemBlock.hideItem"
            >
              <commonTitleWithBorder :title="formItemBlock.title" />
              <el-col class="form-group-blocks-items" :span="24">
                <el-col
                  :span="formItem.span"
                  v-for="(formItem, index) in formItemBlock.children"
                  :key="index"
                >
                  <el-form-item
                    v-if="formItem.type == 'hideSymbol'"
                    class="visiHidden"
                  >
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item
                    v-if="
                      formItem.type == 'fileshowList' &&
                        !formItem.hideItem &&
                        formGroupSettings.formGroupValues[formItem.name] &&
                        formGroupSettings.formGroupValues[formItem.name]
                          .length > 0
                    "
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <fileshowList
                      :defaultSettings="formItem.fileSettings || {}"
                      :defaultdatas="
                        formGroupSettings.formGroupValues[formItem.name]
                      "
                      @handleRemoveFiles="handleRemoveFiles"
                      @handleReadFiles="handleReadFiles"
                    />
                  </el-form-item>
                  <!-- item:image -->
                  <el-form-item
                    v-if="formItem.type == 'image'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <template
                      v-for="(imgItem, index) in formGroupSettings
                        .formGroupValues[formItem.name]"
                    >
                      <el-col :span="6" :key="index">
                        <img
                          v-if="imgItem.viewPic"
                          :src="imgItem.imgSrc"
                          alt=""
                          width="100%"
                        />
                        <a
                          v-else
                          @click="return false;"
                          class="file displayBlock textEllipsis pl6"
                          :href="imgItem.imgSrc"
                          target="_blank"
                        >
                          <em
                            class="el-icon-picture-outline"
                            v-if="imgItem.isImage == 'true'"
                          ></em>
                          <em class="el-icon-files" v-else></em>
                          <span class="ml10">{{ imgItem.fileName }}</span>
                        </a>
                      </el-col>
                    </template>
                  </el-form-item>
                  <!-- item:transfer -->
                  <el-form-item
                    v-if="formItem.type == 'transfer'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-transfer
                      :disabled="formItem.disabled"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :props="formItem.transferProps"
                      :data="formItem.data"
                      filterable
                      :titles="formItem.titles"
                      :button-texts="formItem.buttons"
                      :filter-method="filterMethod"
                      :filter-placeholder="formItem.placeholder"
                    ></el-transfer>
                  </el-form-item>
                  <!-- item:switch -->
                  <el-form-item
                    v-if="formItem.type == 'switch' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-switch
                      style="height:40px;"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :active-value="formItem.activeValue"
                      :active-color="formItem.activeColor || '#13ce66'"
                      :active-text="formItem.activeText || ''"
                      :inactive-value="formItem.inactiveValue"
                      :inactive-color="formItem.inactiveColor || '#ff4949'"
                      :inactive-text="formItem.inactiveText || ''"
                      :disabled="formItem.disabled"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    >
                    </el-switch>
                  </el-form-item>
                  <!-- item:input -->
                  <el-form-item
                    v-if="formItem.type == 'input' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-input
                      v-if="formItem.password"
                      :show-password="formItem.password"
                      :disabled="formItem.disabled"
                      :placeholder="formItem.placeholder"
                      autocomplete="new-password"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                    ></el-input>
                    <el-input
                      v-else
                      :disabled="formItem.disabled"
                      :placeholder="formItem.placeholder"
                      autocomplete="off"
                      :title="formGroupSettings.formGroupValues[formItem.name]"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    ></el-input>
                  </el-form-item>
                  <!-- item:input number -->
                  <el-form-item
                    v-if="formItem.type == 'inputNumber' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-input
                      type="number"
                      :disabled="formItem.disabled"
                      :placeholder="formItem.placeholder"
                      autocomplete="off"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    ></el-input>
                  </el-form-item>
                  <!-- item:stepInput -->
                  <el-form-item
                    v-if="formItem.type == 'stepInput' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-input-number
                      class="width100"
                      :disabled="formItem.disabled"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :controls="formItem.controls == 'false' ? false : true"
                      :step="formItem.step"
                      :precision="formItem.precision"
                      :placeholder="formItem.placeholder"
                      :min="formItem.min"
                      :max="formItem.max"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    ></el-input-number>
                  </el-form-item>
                  <!-- item:textarea -->
                  <el-form-item
                    v-if="formItem.type == 'textarea' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-input
                      :disabled="formItem.disabled"
                      type="textarea"
                      :rows="formItem.rows || 2"
                      :placeholder="formItem.placeholder"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :class="formItem.className"
                    ></el-input>
                  </el-form-item>
                  <!-- item:html -->
                  <el-form-item
                    v-if="formItem.type == 'html'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <div
                      style="line-height:40px;"
                      @click="handleHtmlNodeAction"
                      v-html="formGroupSettings.formGroupValues[formItem.name]"
                    ></div>
                  </el-form-item>
                  <!-- item:rate -->
                  <el-form-item
                    v-if="formItem.type == 'rate'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-rate
                      class="pt10 pb10"
                      :disabled="formItem.disabled"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :colors="formItem.colors"
                    >
                    </el-rate>
                  </el-form-item>
                  <!-- item:elCheckbox -->
                  <el-form-item
                    v-if="formItem.type == 'elCheckbox' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width || '0px'"
                    :prop="formItem.name"
                  >
                    <elCheckbox
                      class="width100"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :data="formItem.data"
                      @handleChangeBox="handleChangeBox"
                    />
                  </el-form-item>
                  <!-- item:elCheckboxArea -->
                  <el-form-item
                    v-if="
                      formItem.type == 'elCheckboxArea' && !formItem.hideItem
                    "
                    :label="formItem.label"
                    :label-width="formItem.width || '0px'"
                    :prop="formItem.name"
                  >
                    <elCheckboxArea
                      class="width100"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :areadata="formItem.data"
                      @handleChangeBoxArea="handleChangeBoxArea"
                    />
                  </el-form-item>
                  <!-- item:inputTable -->
                  <el-form-item
                    v-if="formItem.type == 'inputTable' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <inputTable
                      :defaultSettings="formItem"
                      :defaultdatas="
                        formGroupSettings.formGroupValues[formItem.name]
                      "
                      :selectedList="
                        formItem.selectedListName
                          ? formGroupSettings.formGroupValues[
                              formItem.selectedListName
                            ]
                          : []
                      "
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      @handleTableMutiChecked="handleTableMutiChecked"
                      @tableSelectChange="handleChangeSelect"
                    />
                  </el-form-item>
                  <!-- item:date -->
                  <el-form-item
                    v-if="formItem.type == 'date'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-date-picker
                      class="width100"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :type="formItem.dateType"
                      :range-separator="formItem.dateRangeSeparator"
                      :start-placeholder="formItem.dateStartPlaceholder"
                      :end-placeholder="formItem.dateEndPlaceholder"
                      :format="formItem.format"
                      :value-format="formItem.valueFormat"
                      :disabled="formItem.disabled"
                    ></el-date-picker>
                  </el-form-item>
                  <!-- item:button -->
                  <el-form-item
                    v-if="formItem.type == 'button'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-button
                      v-for="formBtn in formItem.data"
                      :key="formBtn.flag"
                      :type="formBtn.styleType"
                      :size="formBtn.size"
                      :icon="formBtn.icon"
                      @click="
                        handleChangeSelect(formItem.linkName, formBtn.flag)
                      "
                    >
                      {{ formBtn.label }}
                    </el-button>
                  </el-form-item>
                  <!-- item:checkbox -->
                  <el-form-item
                    v-if="formItem.type == 'checkbox'"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-checkbox-group
                      class="width100 pt14"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :disabled="formItem.disabled"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    >
                      <el-checkbox
                        v-for="opt in formItem.data"
                        :key="opt.value"
                        :label="opt.value"
                      >
                        {{ opt.label }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <!-- item:radio -->
                  <el-form-item
                    v-if="formItem.type == 'radio' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-radio-group
                      class="width100 pt14"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :disabled="formItem.disabled"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    >
                      <el-radio
                        v-for="opt in formItem.data"
                        :key="opt.value"
                        :label="opt.value"
                      >
                        {{ opt.label }}
                      </el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <!-- item:cascader -->
                  <el-form-item
                    v-if="formItem.type == 'cascader' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-cascader
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      class="width100"
                      :placeholder="formItem.placeHolder"
                      :options="formItem.data"
                      :props="formItem.props"
                      :filterable="formItem.filterable"
                      :disabled="formItem.disabled"
                      :clearable="!formItem.cannotClear"
                      :debounce="formItem.debounce"
                      @change="
                        handleChangeSelect(
                          formItem.linkName,
                          formGroupSettings.formGroupValues[formItem.name]
                        )
                      "
                    ></el-cascader>
                  </el-form-item>
                  <!-- item:select -->
                  <el-form-item
                    v-if="formItem.type == 'select' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-col
                      :span="
                        formItem.buttonBehind
                          ? 24 - parseInt(formItem.buttonAttr.span)
                          : 24
                      "
                    >
                      <el-select
                        class="width100"
                        v-model="
                          formGroupSettings.formGroupValues[formItem.name]
                        "
                        :placeholder="formItem.placeHolder"
                        :disabled="formItem.disabled"
                        :filterable="formItem.filterable"
                        :multiple="formItem.multiple"
                        :defaultFirstOption="formItem.multiple"
                        :clearable="!formItem.cannotClear"
                        auto-complete="off"
                        @change="
                          handleChangeSelect(
                            formItem.linkName,
                            formGroupSettings.formGroupValues[formItem.name]
                          )
                        "
                      >
                        <el-option
                          v-for="opt in formItem.data"
                          :key="opt.value"
                          :label="opt.label"
                          :value="opt.value"
                          :disabled="opt.disabled"
                        ></el-option>
                      </el-select>
                    </el-col>
                    <el-col
                      v-if="formItem.buttonBehind"
                      :span="formItem.buttonAttr.span"
                      class="textAlignRight"
                    >
                      <el-button
                        :class="formItem.buttonAttr.buttonClass"
                        :type="formItem.buttonAttr.type"
                        :size="formItem.buttonAttr.size"
                        @click="handleInlineFnc(formItem.buttonAttr.flag)"
                      >
                        {{ formItem.buttonAttr.label }}
                      </el-button>
                    </el-col>
                  </el-form-item>
                  <!-- item:editor -->
                  <el-form-item
                    class="editor"
                    v-if="formItem.type == 'editor' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <vue-ueditor-wrap
                      class="lheightInitial"
                      :disabled="formItem.disabled"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :config="formItem.config"
                    ></vue-ueditor-wrap>
                  </el-form-item>
                  <!-- item:upload -->
                  <el-form-item
                    v-if="formItem.type == 'upload' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <el-upload
                      class="upload-demo"
                      ref="fileUpd"
                      :accept="formItem.acceptType"
                      action="123"
                      :data="upddata"
                      :multiple="formItem.multiple"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-exceed="handleExceed"
                      :on-remove="handleRemove"
                      :on-success="handleUpdSuccess"
                      :file-list="fileList"
                      :auto-upload="false"
                    >
                      <el-button slot="trigger" size="small" type="primary">
                        <em class="el-icon-plus"></em>
                        {{ formItem.choseBtn }}
                      </el-button>
                    </el-upload>
                    <div class="updTips">
                      提示：本系统禁止上传涉密或者违法文件，请核验后谨慎上传
                    </div>
                  </el-form-item>
                  <!-- item:elTreeSelect -->
                  <el-form-item
                    v-if="formItem.type == 'elTreeSelect' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width || '0px'"
                    :prop="formItem.name"
                  >
                    <elTreeSelect
                      class="width100"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :props="formItem.props"
                      :modelName="formItem.name"
                      :options="formItem.data"
                      :disabled="formItem.disabled"
                    />
                  </el-form-item>
                  <!-- item:elTree -->
                  <el-form-item
                    v-if="formItem.type == 'elTree' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width || '0px'"
                    :prop="formItem.name"
                  >
                    <elTree :treeSettings="formItem.treeSettings"></elTree>
                  </el-form-item>
                  <!-- item:selectTree -->
                  <el-form-item
                    v-if="formItem.type == 'selectTree' && !formItem.hideItem"
                    :label="formItem.label"
                    :label-width="formItem.width"
                    :prop="formItem.name"
                  >
                    <kt-select-tree
                      class="selectTree"
                      v-model="formGroupSettings.formGroupValues[formItem.name]"
                      :data="formItem.data"
                      :width="formItem.treeWidth"
                      :size="formItem.treeSize"
                      :canChoseItem="formItem.canChoseItem"
                      :filterable="formItem.filterable"
                      :multiple="formItem.multiple"
                      :clearable="formItem.clearable"
                      :disabled="formItem.disabled"
                    ></kt-select-tree>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
        <el-col :span="formGroupSettings.fullScreen ? 24 : 4">
          <el-form-item
            label-width="0"
            :class="[
              formGroupSettings.fullScreen
                ? 'textAlignCenter'
                : 'textAlignRight',
              formGroupSettings.buttonGroupClass
            ]"
          >
            <el-button
              v-for="formBtn in formGroupSettings.formButtonList"
              :key="formBtn.flag"
              :type="formBtn.styleType"
              :size="formBtn.size || 'small'"
              :icon="formBtn.icon"
              @click="onSubmit(formBtn, 'formItems')"
            >
              {{ formBtn.label }}
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import commonTitleWithBorder from "@/components/commonTitleWithBorder";
import elTreeSelect from "@/components/elTreeSelect";
import inputTable from "./inputTable";
import elCheckbox from "./checkbox";
import elCheckboxArea from "./checkboxArea";
import fileshowList from "./fileList";
import elTree from "@/components/tree";
export default {
  name: "formGroup",
  props: {
    formGroupSettings: Object
  },
  components: {
    commonTitleWithBorder,
    elTreeSelect,
    elCheckbox,
    elCheckboxArea,
    inputTable,
    fileshowList,
    elTree
  },
  data() {
    return {
      fileList: [],
      upddata: {},
      uploadForm: new FormData(),
      updfileParamName: this.formGroupSettings.formGroupTypeUploadName,
      filterMethod(query, item) {
        return item.label.indexOf(query) > -1;
      }
    };
  },
  beforeMount() {
    let that = this;
    this.fileList = [];
    this.formGroupSettings.formGroupList.map(item => {
      if (item.type == "editor") {
        item.config.serverUrl = that.$global.ueEditorServerUrl;
        item.config.UEDITOR_HOME_URL = that.$global.ueEditorUrl;
      }
      // if (item.type == "upload") {
      //   that.updfileParamName = item.name ? item.name : "files";
      // }
    });
  },
  // updated() {
  //   this.fileList = [];
  // },
  methods: {
    // v-html内容点击事件不会出发，但是可以使用事件代理，仅做数据传递使用，不在这里改变业务逻辑
    handleHtmlNodeAction(event) {
      let paramObj = {
        dataId: event.target.getAttribute("data-id"),
        dataType: event.target.getAttribute("data-type"),
        dataText: event.target.getAttribute("data-text")
      };
      this.$emit("handleHtmlNodeAction", paramObj);
    },
    // 表格选中
    handleTableMutiChecked(val, formName) {
      this.formGroupSettings.formGroupValues[formName] = val;
    },
    // 已上传文件列表展示组件删除文件回调
    handleRemoveFiles(fileData) {
      this.$emit("handleRemoveFiles", fileData);
    },
    // 读取文件列表中的文件
    handleReadFiles(fileData) {
      this.$emit("handleReadFiles", fileData);
    },
    // 行间按钮
    handleInlineFnc(flag) {
      if (!flag) {
        console.log("没有定义按钮功能");
        return;
      }
      this.$emit("inlineFncs", flag);
    },
    //checkbox取值
    handleChangeBox(val) {
      console.log(val, "checkbox");
    },
    //checkbox选区取值
    handleChangeBoxArea(val) {
      console.log(val, "handleChangeBoxArea");
    },
    // 文件上传相关钩子
    handleChange(file, fileList) {
      let nameStr = "";
      fileList.map(fileItem => {
        nameStr += fileItem.name + ",";
      });
      this.fileList = fileList;
      if (this.formGroupSettings.fileChangeFlag) {
        this.$emit(
          "linkSelect",
          this.formGroupSettings.fileChangeFlag,
          nameStr
        );
      }
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`最多上传 ${files.length} 个文件`);
      console.log(files, fileList);
    },
    handleRemove(file, fileList) {
      let nameStr = "";
      fileList.map(fileItem => {
        nameStr += fileItem.name + ",";
      });
      this.fileList = fileList;
      if (this.formGroupSettings.fileChangeFlag) {
        this.$emit(
          "linkSelect",
          this.formGroupSettings.fileChangeFlag,
          nameStr
        );
      }
    },
    submitUpload() {
      this.$refs.fileUpd[0].submit();
    },
    handleUpdSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      // that.$emit("formGroupSubmit", formBtn, "updType");
    },
    // 下拉关联其他项目
    handleChangeSelect(linkname, data) {
      if (!linkname) {
        return false;
      }
      this.$emit("linkSelect", linkname, data);
    },
    updDataChange(data) {
      let that = this;
      return new Promise(resolve => {
        that.uploadForm = new FormData();
        let postParams = JSON.parse(JSON.stringify(data)),
          updstrName = that.updfileParamName;
        postParams = that.$globalFnc.postArrtoString(postParams);
        // if (that.fileList.length == 1) {
        //   updstrName = "file";
        // }
        // if (that.fileList.length > 1) {
        //   updstrName = "files";
        // }
        let keys = Object.keys(postParams);
        for (let key of keys) {
          if (key != "viewfiles" && key != "flowComments")
            that.uploadForm.append(key, postParams[key]);
        }
        if (that.fileList.length > 0) {
          for (var i = 0; i < that.fileList.length; i++) {
            that.uploadForm.append(updstrName, that.fileList[i].raw);
          }
        }
        resolve(that.uploadForm);
      });
    },
    // 提交表单
    onSubmit(formBtn, formName) {
      if (formBtn.flag == "cancle" || formBtn.flag == "cancel") {
        this.$emit("formGroupSubmit", formBtn, {});
        return false;
      }
      let that = this,
        postDatas = {};
      this.$refs[formName].fields.map(filed => {
        if (filed.labelFor != "viewfiles" && filed.labelFor != "flowComments")
          postDatas[filed.labelFor] = filed.fieldValue;
      });
      if (formBtn.flag == "reset") {
        this.$refs[formName].resetFields();
        return false;
      }
      that.$refs[formName].validate(valid => {
        if (valid) {
          if (that.formGroupSettings.formGroupTypeUpload) {
            that
              // .updDataChange(that.formGroupSettings.formGroupValues)
              .updDataChange(postDatas)
              .then(data => {
                // that.submitUpload();
                that.fileList = [];
                that.$emit("formGroupSubmit", formBtn, data, postDatas);
              });
          } else {
            if (that.updfileParamName) {
              postDatas[that.updfileParamName] = this.fileList;
            }
            that.$emit(
              "formGroupSubmit",
              formBtn,
              postDatas,
              that.formGroupSettings.formGroupValues
            );
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>

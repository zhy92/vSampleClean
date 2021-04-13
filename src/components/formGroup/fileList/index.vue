<template>
  <div>
    <ul>
      <li
        v-for="(file, fileIndex) in fileslist"
        :key="file.fileId"
        class="lheight40"
      >
        <span class="mr5">
          <i class="el-icon-document"></i>
        </span>
        <span class="mr10 cursor" @click="handleReadFile(file)">{{
          file.fileName
        }}</span>
        <span
          class="mr10"
          v-if="file.fileSize && !defaultSettings.hideFileSize"
        >
          {{ file.fileSize | fileSize }}
        </span>
        <span
          class="mr10"
          v-if="file.fileTime && !defaultSettings.hideFileTime"
        >
          {{ file.fileTime | formatdate("ymd") }}
        </span>
        <span
          class="cursor"
          v-if="!defaultSettings.hidedelete"
          @click="handleRemoveFile(file, fileIndex)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "fileList",
  props: {
    defaultSettings: {
      type: Object,
      default() {
        return {};
      }
    },
    defaultdatas: {
      type: Array,
      default() {
        return [
          {
            fileId: "7329F470058943EE82D1A03B17C7536F",
            fileName: "2019年度粮安考核评分点分解-普通(1).xls",
            filePath: "report",
            fileSave: "F",
            fileSize: 56320,
            fileTime: 1600963200000,
            fileType: "application/vndms-excel",
            finalFileName: "2019年度粮安考核评分点分解-普通(1).xls",
            groupId: "ASM_SHEME_REPORT",
            relationId: "10"
          }
        ];
      }
    }
  },
  data() {
    let files = this.$globalFnc.deepCopy(this.defaultdatas);
    return {
      fileslist: files
    };
  },
  methods: {
    // 读取预览文件
    handleReadFile(fileItem) {
      this.$globalFnc.readFileOnline(fileItem);
      // this.$emit("handleReadFiles", fileItem);
    },
    // 删除文件
    handleRemoveFile(item, fileIndex) {
      this.fileslist.splice(fileIndex, 1);
      this.$emit("handleRemoveFiles", item);
    }
  }
};
</script>

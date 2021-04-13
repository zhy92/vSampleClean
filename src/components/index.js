import breadCrumb from "@/components/breadCrumb";
import tableList from "@/components/tableList";
import tree from "@/components/tree";
import pagination from "@/components/pagination";
import operateButtonsGroup from "@/components/operateButtonsGroup";
import dialogForm from "@/components/dialog";
import commonTitleWithBorder from "@/components/commonTitleWithBorder";
import formGroup from "@/components/formGroup";
import formBlocks from "@/components/formGroup/formBlocks";
import tabCard from "@/components/tabCard";
import nodata from "@/components/nodata";
import VueUeditorWrap from "vue-ueditor-wrap";
import VueECharts from "vue-echarts";
import headerBar from "@/components/headerBar";
import menuTable from "@/components/menuTable";
import inputTable from "@/components/formGroup/inputTable";
import horizenNav from "@/components/horizenNav";

export default {
  install(Vue) {
    Vue.component("horizenNav", horizenNav);
    Vue.component("inputTable", inputTable);
    Vue.component("headerBar", headerBar);
    Vue.component("menuTable", menuTable);
    Vue.component("vChart", VueECharts);
    Vue.component("tree", tree);
    Vue.component("breadCrumb", breadCrumb);
    Vue.component("tableList", tableList);
    Vue.component("pagination", pagination);
    Vue.component("operateButtonsGroup", operateButtonsGroup);
    Vue.component("dialogForm", dialogForm);
    Vue.component("commonTitleWithBorder", commonTitleWithBorder);
    Vue.component("formGroup", formGroup);
    Vue.component("formBlocks", formBlocks);
    Vue.component("tabCard", tabCard);
    Vue.component("nodata", nodata);
    Vue.component("vue-ueditor-wrap", VueUeditorWrap);
    Vue.component("inputTable", inputTable);
  }
};

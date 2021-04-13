const data = function(vm) {
  let obj = {
    showNotice: true,
    dialogShowInfoDialogSettings: {
      title: "",
      dialogShowInfoVisible: false,
      showInfoData: {}
    },
    titlesManage: {
      notification: "通知公告",
      inspectionReport: "考核通报",
      dynamic: "工作动态",
      // inspectionFile: "考核文件",
      dataDownload: "资料下载"
    },
    channelIdMap: {
      notification: {
        title: "通知公告",
        cmsChannelId: "2"
      },
      dataDownload: {
        title: "资料下载",
        cmsChannelId: "3"
      },
      dynamic: {
        title: "工作动态",
        cmsChannelId: "4"
      },
      // inspectionFile: "5",
      // indexInfosDistribution: "6",
      // infosDistribution: "6",
      inspectionReport: {
        title: "考核通报",
        cmsChannelId: "7"
      }
    },
    infolist: [],
    cards: {
      cardlistTitle: "卡片标题",
      cardlistOperation: "更多>>",
      cardType: "04",
      cardlistsArray: [
        {
          title: "第一条",
          time: "2019-12-12",
          otherParam: "其他数据1"
        },
        {
          title: "第二条",
          time: "2019-12-13",
          otherParam: "其他数据2"
        }
      ],
      cardItemParams: {
        main: "title",
        subMain: "otherParam"
      }
    }
  };
  return obj;
};
export default data;

const methods = {
  /* 点击未读消息操作按钮 */
  handleCheckUnread() {
    this.$router.push("/informationsPage/infosManage/myCheckout");
  },
  /* 点击card组件头部操作按钮 */
  handleDetailOperate(type) {
    this.$router.push({
      path: "/informationsPage/infosManage/allInfos/" + type
    });
  },
  /* 点击card组件具体条目 */
  handleDetailItemTap(item) {
    this.$router.push({
      path: "/informationsPage/infosManage/infosManageDetail",
      query: {
        cmsContentId: item.cmsContentId,
        fromPage: this.$route.fullPath
      }
    });
  },
  /**
   * 获取信息列表数据
   */
  getAllInfosData() {
    for (let key in this.channelIdMap) {
      let infoObj = {
        cardlistTitle: this.channelIdMap[key].title,
        cardlistOperation: "更多>>",
        cardType: key,
        cardlistsArray: [],
        cardItemParams: {
          main: "title",
          subMain: "updated"
        },
        cardItemStyle: {
          bg: {
            background:
              this.channelIdMap[key]["cmsChannelId"] % 2 == 0
                ? "linear-gradient(90deg, #BBE9CF 0%, #F7FFFA 100%)"
                : "linear-gradient(90deg, #EDDCAA 0%, #FFFFFE 100%)"
          },
          color: {
            color:
              this.channelIdMap[key]["cmsChannelId"] % 2 == 0
                ? "#4AAF87"
                : "#C57A2E"
          },
          seperatorBg: {
            background:
              this.channelIdMap[key]["cmsChannelId"] % 2 == 0
                ? "#4AAF87"
                : "#C57A2E"
          }
        }
      };
      (channelId => {
        let formData = {
          page: 1,
          rows: 10,
          sort: "updated",
          order: "desc",
          filterRules: []
        };
        let filterRules = [
          { field: "cmsChannelId", op: "=", value: channelId + "" },
          { field: "status", op: "=", value: "6" }
        ];
        formData.filterRules = JSON.stringify(filterRules);
        this.$getData(this.$api.getContentList_infosManageApi, formData).then(
          xhr => {
            if (xhr && xhr.rows) {
              infoObj.cardlistsArray = xhr.rows;
            } else {
              infoObj.cardlistsArray = [];
            }
          }
        );
      })(this.channelIdMap[key].cmsChannelId);
      this.infolist.push(infoObj);
    }
  }
};
export default methods;

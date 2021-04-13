import api from "../../../axios/httpApi";
import store from "../../../store";
export default fileItem => {
  // window.open(
  //   store.getters["user/fileViewerUrl"] +
  //     encodeURIComponent(
  //       api.officeViewUrl_common +
  //         "fbFileId=" +
  //         fileItem.fileId +
  //         "&fileName" +
  //         fileItem.fileName +
  //         "&fullfilename=" +
  //         fileItem.fileName
  //     ),
  //   "_blank"
  // );
  window.location.href =
    api.officeViewUrl_common +
    "fbFileId=" +
    fileItem.fileId +
    "&fileName=" +
    fileItem.fileName;
};

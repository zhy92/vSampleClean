import globalVariable from "../../../axios/global_variable";
export default (fileArr, url, viewPic) => {
  fileArr.map(file => {
    if (url != "officeViewUrl_common") {
      file.imgSrc =
        globalVariable[url] + file.fileId + "&fileName=" + file.fileName;
    } else {
      file.imgSrc =
        globalVariable[url] +
        encodeURI(
          globalVariable.commonDownloadUrl_common +
            file.fileId +
            "&fileName=" +
            file.fileName
        );
    }
    // if (file.fileType && file.fileType.indexOf("image") > -1) {
    //   file.isImage = "true";
    // }
    if (viewPic) {
      file.viewPic = viewPic;
    }
  });
  return fileArr;
};

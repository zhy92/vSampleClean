const data = function(vm) {
  let obj = {
    // 创建地图对象
    map: {},
    // 地图的初始化级别，及放大比例
    zoom: 10,
    // 获取点的经纬度
    lngLat: {
      lng: "",
      lat: ""
    }
  };
  return obj;
};
export default data;

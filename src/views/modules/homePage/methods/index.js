const methods = {
  /**
   * 添加地图类型控件
   */
  addCtrl() {
    var ctrl = new T.Control.MapType();
    this.map.addControl(ctrl);
  },
  /**
   * 添加普通标注
   * @param site  (site.lng, site.lat)  地理坐标
   */
  markerPoint(site) {
    site.forEach(item => {
      //创建标注对象
      let marker = new T.Marker(new T.LngLat(item.lng, item.lat));
      //向地图上添加标注
      this.map.addOverLay(marker);
    });
  },
  /**
   * 添加地图事件
   */
  addEvent() {
    let that = this;
    let cp = new T.CoordinatePickup(that.map, {
      callback: lnglat => {
        that.lngLat.lng = lnglat.lng.toFixed(6);
        that.lngLat.lat = lnglat.lat.toFixed(6);
      }
    });
    cp.addEvent();
  },
  MapClick(e) {
    alert(e.lnglat.getLng() + "," + e.lnglat.getLat());
  },
  addMapClick() {
    let that = this;
    this.removeMapClick();
    this.map.addEventListener("click", that.MapClick);
  },
  removeMapClick() {
    let that = this;
    this.map.removeEventListener("click", that.MapClick);
  },
  onLoad() {
    let that = this;
    that.map = new T.Map("mapDiv");
    that.map.centerAndZoom(new T.LngLat(115.40037, 28.68793), that.zoom); // 设置显示地图的中心点和级别
    // 添加地图类型控件
    that.addCtrl();
    // 普通标注
    let site = [{ lng: 115.40037, lat: 28.68793 }];
    that.markerPoint(site);
    // 添加事件
    that.addEvent();
    console.log(that.lngLat, " that.lngLat");
    that.addMapClick();
  }
};
export default methods;

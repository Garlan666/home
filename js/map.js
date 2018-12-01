var map = new BMap.Map("map");
map.enableScrollWheelZoom();
var p=new BMap.Point(113.086486, 22.593605);
map.centerAndZoom(p, 11);
map.addControl(new BMap.NavigationControl());
var marker=new BMap.Marker(p);
map.addOverlay(marker);
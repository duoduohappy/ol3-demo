var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    controls: [new ol.control.ScaleLine()],
    view: new ol.View({
        center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
    })
});

var popup = new ol.Overlay.Popup({
    // offset: [-60, -350],
    title: "测试",
    showMark: true,
    height: "320px",
    width:"500px"
});


/*
 var popup = new ol.Overlay({
 element:document.getElementById("overlay")
 });
 */


map.addOverlay(popup);

map.on('singleclick', function (evt) {
    var prettyCoord = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
    /*    popup.show(map.getCoordinateFromPixel(evt.pixel), '<div>' +
     'DDDDD<h2>Coordinates</h2><p>' + prettyCoord + '</p></div>');*/
    popup.show(map.getCoordinateFromPixel(evt.pixel), '<div><p>这是一个非常伟大的时刻</p><p>这是一个非常伟大的时刻</p><p>这是一个非常伟大的时刻</p><p>这是一个非常伟大的时刻</p></div>');
});

/*map.on('singleclick', function (evt) {
 popup.setPosition(map.getCoordinateFromPixel(evt.pixel));
 });*/

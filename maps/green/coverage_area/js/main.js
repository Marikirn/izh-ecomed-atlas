var highlightLayer;

function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
            color: '#ffff00',
            opacity: 0.6
        });
    } else {
        highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 0.6
        });
    }
    highlightLayer.openPopup();
}

var map = L.map('map', {
    zoomControl: true, maxZoom: 20, minZoom: 1
}).fitBounds([[56.75364967262819, 53.01022286268022], [56.9166740336293, 53.53123305012129]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });
var bounds_group = new L.featureGroup([]);

function setBounds() {
    map.setMaxBounds(map.getBounds());
}

map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 400;
var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});

layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);

function pop_5_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Покрытие</th>\
                        <td>' + (feature.properties['Покрытие'] !== null ? autolinker.link(feature.properties['Покрытие'].toLocaleString()) : '') + '%</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_5_1_0() {
    return {
        pane: 'pane_5_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(193,31,33,0.6)',
        interactive: true,
    }
}
map.createPane('pane_5_1');
map.getPane('pane_5_1').style.zIndex = 401;
map.getPane('pane_5_1').style['mix-blend-mode'] = 'normal';
var layer_5_1 = new L.geoJson(json_5_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_5_1',
    layerName: 'layer_5_1',
    pane: 'pane_5_1',
    onEachFeature: pop_5_1,
    style: style_5_1_0,
});
bounds_group.addLayer(layer_5_1);
map.addLayer(layer_5_1);
function pop_10_2(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Покрытие</th>\
                        <td>' + (feature.properties['Покрытие'] !== null ? autolinker.link(feature.properties['Покрытие'].toLocaleString()) : '') + '%</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_10_2_0() {
    return {
        pane: 'pane_10_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244,139,90,0.6)',
        interactive: true,
    }
}
map.createPane('pane_10_2');
map.getPane('pane_10_2').style.zIndex = 402;
map.getPane('pane_10_2').style['mix-blend-mode'] = 'normal';
var layer_10_2 = new L.geoJson(json_10_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_10_2',
    layerName: 'layer_10_2',
    pane: 'pane_10_2',
    onEachFeature: pop_10_2,
    style: style_10_2_0,
});
bounds_group.addLayer(layer_10_2);
map.addLayer(layer_10_2);
function pop_25_3(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Покрытие</th>\
                        <td>' + (feature.properties['Покрытие'] !== null ? autolinker.link(feature.properties['Покрытие'].toLocaleString()) : '') + '%</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_25_3_0() {
    return {
        pane: 'pane_25_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(246,225,117,0.6)',
        interactive: true,
    }
}
map.createPane('pane_25_3');
map.getPane('pane_25_3').style.zIndex = 403;
map.getPane('pane_25_3').style['mix-blend-mode'] = 'normal';
var layer_25_3 = new L.geoJson(json_25_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_25_3',
    layerName: 'layer_25_3',
    pane: 'pane_25_3',
    onEachFeature: pop_25_3,
    style: style_25_3_0,
});
bounds_group.addLayer(layer_25_3);
map.addLayer(layer_25_3);
function pop_35_4(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Покрытие</th>\
                        <td>' + (feature.properties['Покрытие'] !== null ? autolinker.link(feature.properties['Покрытие'].toLocaleString()) : '') + '%</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_35_4_0() {
    return {
        pane: 'pane_35_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(130,199,98,0.6)',
        interactive: true,
    }
}
map.createPane('pane_35_4');
map.getPane('pane_35_4').style.zIndex = 404;
map.getPane('pane_35_4').style['mix-blend-mode'] = 'normal';
var layer_35_4 = new L.geoJson(json_35_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_35_4',
    layerName: 'layer_35_4',
    pane: 'pane_35_4',
    onEachFeature: pop_35_4,
    style: style_35_4_0,
});
bounds_group.addLayer(layer_35_4);
map.addLayer(layer_35_4);
var baseMaps = {};

L.control.layers(baseMaps, {
    '<img src="legend/35_4.png" /> Покрытие 35%': layer_35_4,
    '<img src="legend/25_3.png" /> Покрытие 25%': layer_25_3,
    '<img src="legend/10_2.png" /> Покрытие 10%': layer_10_2,
    '<img src="legend/5_1.png" /> Покрытие 5%': layer_5_1,
}, { collapsed: false }).addTo(map);

setBounds();
resetLabels([layer_5_1]);
map.on("zoomend", function () {
    resetLabels([layer_5_1]);
});
map.on("layeradd", function () {
    resetLabels([layer_5_1]);
});
map.on("layerremove", function () {
    resetLabels([layer_5_1]);
});

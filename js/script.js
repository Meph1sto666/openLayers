function createNewVectorMap() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.VectorImage({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 0
        })
    });
}

function createNewTileMap() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Tile({
                source: new ol.source.Stamen({layer: "watercolor"})
            }),
            new ol.layer.Tile({
                source: new ol.source.Stamen({layer: "terrain-labels"})
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 0
        })
    });
}

function setStyle(cssVar, val) {
    document.querySelector(':root').style.setProperty(cssVar, val);
}

function setMapSize() {
    setStyle("--width", screen.width + "px");
    setStyle("--height", screen.height + "px");
}
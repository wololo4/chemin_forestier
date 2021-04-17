var osm2, osmAttrib;
var miniMap;

function miniMap(){
    
    osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib});
    miniMap = new L.Control.MiniMap(
        osm2,
        {
            zoomLevelOffset:-6,
            position:'bottomleft'
        }
    ).addTo(map);
}
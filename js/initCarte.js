var map;
var drawnItems;
var osm2, osmAttrib;
var MiniMap

function initCarte(){

    // Add map and tile layer
    map = L.map("map", {center: [45.52,-73.63], zoom: 5});

    osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    L.tileLayer(
        osmUrl, 
        {attribution: osmAttrib}
    ).addTo(map);

    // Create feature group for drawn items & layer group for previously drawn items
    drawnItems = L.featureGroup().addTo(map);

    // Add draw control
    new L.Control.Draw({
        draw : {
            polygon : false,
            polyline : true,
            rectangle : false,     // Rectangles disabled
            circle : false,        // Circles disabled 
            circlemarker : false,  // Circle markers disabled
            marker: false
        },
        edit : {
            featureGroup: drawnItems
        }
    }).addTo(map);

    // On draw - create editable popup
    map.addEventListener("draw:created", function(e) {
        e.layer.addTo(drawnItems);
        createFormPopup();
    });

    // On edit or delete - Close popup
    map.addEventListener("draw:editstart", function(e) {
        drawnItems.closePopup();
    });
    map.addEventListener("draw:deletestart", function(e) {
        drawnItems.closePopup();
    });
    map.addEventListener("draw:editstop", function(e) {
        drawnItems.openPopup();
    });
    map.addEventListener("draw:deletestop", function(e) {
        if(drawnItems.getLayers().length > 0) {
            drawnItems.openPopup();
        }
    });
}
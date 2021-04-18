//declaration de variable globale
var map;
var drawnItems;
var osm2, osmAttrib;
var MiniMap

//fonction qui permet d'initialiser la carte
function initCarte(){

    //declaration de la variable map
    map = L.map("map", {center: [45.52,-73.63], zoom: 5});

    //declaration des variable de fond de carte
    osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    //ajout des fonds de carte
    L.tileLayer(
        osmUrl, 
        {attribution: osmAttrib}
    ).addTo(map);

    // Create feature group for drawn items & layer group for previously drawn items
    drawnItems = L.featureGroup().addTo(map);

    // Add draw control
    //Il est seulement possible de dessiner des lignes puisque la couche des routes est linéaires
    new L.Control.Draw({
        draw : {
            polygon : false,        //disabled
            polyline : true,
            rectangle : false,     // Rectangles disabled
            circle : false,        // Circles disabled 
            circlemarker : false,  // Circle markers disabled
            marker: false           //disabled
        },
        edit : {
            featureGroup: drawnItems
        }
    }).addTo(map);

    // On draw - create editable popup
    map.addEventListener("draw:created", function(e) {
        e.layer.addTo(drawnItems);
        insertPopup();
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

    //fonction qui permet plusieurs control de la carte (voir miniMap.js)
    miniMap();

    //fonction qui permet d'afficher une légende(voir makeLegend.js)
    makeLegend();
}
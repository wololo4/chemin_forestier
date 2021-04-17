// Submission - Sending to CARTO
function insert(e) {

    if(e.target && e.target.id == "submit") {

        // Get user name and description
        let entered_id = document.getElementById("input_id").value;
        let entered_cls_chefor = document.getElementById("input_cls_chefor").value;
        let entered_nomrte = document.getElementById("input_nomrte").value;
        let entered_an_classi = document.getElementById("input_an_classi").value;
        let entered_no_chefor = document.getElementById("input_no_chefor").value;
        let entered_gestion = document.getElementById("input_gestion").value;
        let entered_source = document.getElementById("input_source").value;
        
        // For each drawn layer
        drawnItems.eachLayer(function(layer) {
        
        // Create SQL expression to insert layer
            let drawing = JSON.stringify(layer.toGeoJSON().geometry);

            function insertData(){
                $.ajax({
                    url: "php/insert.php?draw=" + drawing + "&id=" + entered_id + "&cls_chefor=" + entered_cls_chefor + "&nomrte=" + entered_nomrte + "&an_classi=" + entered_an_classi + "&no_chefor=" + entered_no_chefor + "&gestion=" + entered_gestion + "&source=" + entered_source
                })
            }

            insertData();

        });

        // Clear drawn items layer
        drawnItems.closePopup();
        drawnItems.clearLayers();

    }
    
}

// Create editable popup
function createFormPopup() {
    let popupContent = 
        '<form>' + 
        'ID:<br><input type="text" id="input_id"><br>' +
        'Classe de chemin forestier:<br>'+
            '<select id="input_cls_chefor">'+
                '<option value="01">01</option>'+
                '<option value="02">02</option>'+
                '<option value="03">03</option>'+
                '<option value="04">04</option>'+
                '<option value="05">05</option>'+
                '<option value="HI">HI</option>'+
                '<option value="IN" selected="selected">IN</option>'+
                '<option value="NF">NF</option>'+
            '</select>'+
        '<br>' +
        'Nom de la route:<br><input type="text" id="input_nomrte"><br>' +
        'Année de classification:<br><input type="text" id="input_an_classi"><br>' +
        'Numéro du chemin:<br><input type="text" id="input_no_chefor"><br>' +
        'Gestion:<br><input type="text" id="input_gestion"><br>' +
        'Source:<br><input type="text" id="input_source"><br>' +
        '<input type="button" value="Submit" id="submit">' + 
        '</form>';
    drawnItems.bindPopup(popupContent).openPopup();
}

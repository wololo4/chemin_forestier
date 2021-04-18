//appel des varaibles globales
var popupContent;
var drawnItems;
var couche;

// fonction qui permet de créer un popup avec son formulaire après avoir dessiner une nouvelle entités
function insertPopup() {
    popupContent = 
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

//fonction qui permet d'ouvrir un popup après avoir cliquer sur une entité avec son formulaire
function modifyPopup(){

    couche = new L.GeoJSON(data.features, {
        style: style_chemin,
        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                '<div class="tabs">' +

                    '<div class="tab" id="tab-1">' +
                        '<div class="content">' +
                            '<b>'+
                                'ID: ' + feature.properties.id +'</br>'+
                                'Classe de chemin forestier: ' + feature.properties.cls_chefor + '<br>'+
                                'Nom de route: ' + feature.properties.nomrte + '<br>'+
                                'Année de classification: ' + feature.properties.an_classi + '<br>'+
                                'Numéro du chemin forestier: ' + feature.properties.no_chefor + '<br>'+
                                'Gestion: ' + feature.properties.gestion + '<br>'+
                                'Source: ' + feature.properties.source + '<br>'+
                            '</b>' +
                        '</div>' +
                    '</div>' +

                    '<div class="tab" id="tab-2">' +
                        '<div class="content">' +
                        '<b>'+
                            '<form>'+
                            'ID:<br><input type="text" disabled="disabled" id="input_id2" value=' + feature.properties.id + '><br>'+
                            'Classe de chemin forestier:'+
                            '<select id="input_cls_chefor2">'+
                                '<option hidden value=' + feature.properties.cls_chefor + '>'+ feature.properties.cls_chefor +'</option>'+
                                '<option value="01">01</option>'+
                                '<option value="02">02</option>'+
                                '<option value="03">03</option>'+
                                '<option value="04">04</option>'+
                                '<option value="05">05</option>'+
                                '<option value="HI">HI</option>'+
                                '<option value="IN">IN</option>'+
                                '<option value="NF">NF</option>'+
                            '</select></br>'+
                            'Nom de route:<br><input type="text" id="input_nomrte2" value=' + feature.properties.nomrte + '><br>'+
                            'Année de classification:<br><input type="text" id="input_an_classi2" value=' + feature.properties.an_classi + '><br>'+
                            'Numéro du chemin forestier:<br><input type="text" id="input_no_chefor2" value=' + feature.properties.no_chefor + '><br>'+
                            'Gestion:<br><input type="text" id="input_gestion2" value=' + feature.properties.gestion + '><br>'+
                            'Source:<br><input type="text" id="input_source2" value=' + feature.properties.source + '><br>'+
                            '<input type="button" value="Modifier" id="submit2">'+
                            '<input type="button" value="Supprimer" id="delete">'+
                            '</form>'+
                        '</b>' +
                        '</div>' +
                    '</div>' +

                    '<ul class="tabs-link">' +
                        '<li class="tab-link"> <a href="#tab-1"><span>Info</span></a></li>' +
                        '<li class="tab-link"> <a href="#tab-2"><span>Modifier</span></a></li>' +
                    '</ul>' +
                '</div>'
            )
        }        
    })
}
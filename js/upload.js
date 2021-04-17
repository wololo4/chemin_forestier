var id = 'id'
var cls_chefor = 'cls_chefor'
var nomrte = 'nomrte'
var an_classi = 'an_classi'
var no_chefor = 'no_chefor'
var gestion = 'gestion'
var source = 'source'

var style_chemin = function(feature) {
    if (feature.properties.cls_chefor == '01'){
        return{
            weight: 3,
            opacity: 1,
            color: 'red' 
        }
    } if (feature.properties.cls_chefor == '02'){
        return{
            weight: 2.5,
            opacity: 1,
            color: 'red' 
        }
    } if (feature.properties.cls_chefor == '03'){
        return{
            weight: 2,
            opacity: 1,
            color: 'red' 
        }
    } if (feature.properties.cls_chefor == '04'){
        return{
            weight: 1.5,
            opacity: 1,
            color: 'red' 
        }
    } if (feature.properties.cls_chefor == '05'){
        return{
            weight: 1.5,
            opacity: 1,
            dashArray: '3',
            color: 'red' 
        }
    } if (feature.properties.cls_chefor == 'HI'){
        return{
            weight: 1.5,
            opacity: 1,
            dashArray: '3',
            color: 'blue' 
        }
    } if (feature.properties.cls_chefor == 'IN'){
        return{
            weight: 2,
            opacity: 1,
            color: 'grey' 
        }
    } if (feature.properties.cls_chefor == 'NF'){
        return{
            weight: 2,
            opacity: 1,
            color: 'black' 
        }
    }
}

function upload(){
    $.ajax({url:'php/upload.php?id=' + id + '&cls_chefor' + cls_chefor + '&nomrte=' + nomrte + '&gestion=' + gestion + '&source=' + source,
        success: function(response){
            data = JSON.parse(response)
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

                        
                        //"<form action='php/alter.php?var='" + champ + "'&id='" + id + "'><label for='fname'>da_number:</label><br><input type='text' id='fname' name='fname' value='" + feature.properties.da_number + "'><br><label for='lname'>var:</label><br><input type='text' id='lname' name='lname' value='" + feature.properties.var + "'><br><br><input type='submit' value='Submit'></form>"
                        //'<ul class="nav nav-tabs"><li class="active"><a data-toggle="tab" href="#tab_info">Info</a></li><li><a data-toggle="tab" href="#tab_media">Photos</a></li></ul><div class="tab-content"><div id="tab_info" class="tab-pane fade in active" style="height:245px;overflow:auto;"></div><div id="tab_media" class="tab-pane fade"></div></div>',
                        //'<h1>' + feature.properties.da_number + '</h1><p>' + champ + ': ' + feature.properties.var + '</p>',
                        //{editable: true}
                    )
                    
                }

                
            })
            couche.addTo(map)

            // Centrage de la vue sur les polygones affichés
            map.fitBounds(couche.getBounds());
        }
    })	
}

//declaration de variable globale
var couche;
var style_chemin

//declaration de constantes
const id = 'id'
const cls_chefor = 'cls_chefor'
const nomrte = 'nomrte'
const an_classi = 'an_classi'
const no_chefor = 'no_chefor'
const gestion = 'gestion'
const source = 'source'

//definintion du style de la couche
style_chemin = function(feature) {
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

//fonction qui permet d'uploader la couche de chemin forestion
function upload(){
    //requete sql pour uploader à partir d'un protocole AJAX à l'aide d'un formulaire php
    $.ajax({url:'php/upload.php?id=' + id + '&cls_chefor' + cls_chefor + '&nomrte=' + nomrte + '&gestion=' + gestion + '&source=' + source,
        success: function(response){
            data = JSON.parse(response)
            //fonction qui permet d'ajouter un popup
            modifyPopup();
            //ajout de la couche à la carte
            couche.addTo(map)
            // Centrage de la vue sur les polygones affichés
            map.fitBounds(couche.getBounds());
        }
    })	
}
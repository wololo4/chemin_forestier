//declaration des variables globales
var map, couche;

//fonction qui permet de redessiner les entitées après la mise à jour de la bd
function redraw(){
    //retrait de la couche de l'affichage
    map.removeLayer(couche)
    //redessine la couche
    upload();
}
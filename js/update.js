//declaration des variables globales
var couche;
var map;

//fonction qui permet de mettre à jour la bd après avoir modifier le formulaire
function update(e) {
    //lorsque le boutton ("submit2") est appuyer
    if(e.target && e.target.id == "submit2") {

        //importe l'information dans le formulaire pour chaque attribut
        let entered_id = document.getElementById("input_id2").value;
        let entered_cls_chefor = document.getElementById("input_cls_chefor2").value;
        let entered_nomrte = document.getElementById("input_nomrte2").value;
        let entered_an_classi = document.getElementById("input_an_classi2").value;
        let entered_no_chefor = document.getElementById("input_no_chefor2").value;
        let entered_gestion = document.getElementById("input_gestion2").value;
        let entered_source = document.getElementById("input_source2").value;
            
        //fonction qui met à jour la bd
        function updateData(){
            $.ajax({
                //requete sql pour mettre à jour à partir d'un protocole AJAX à l'aide d'un formulaire php
                url: "php/update.php?id=" + entered_id + "&cls_chefor=" + entered_cls_chefor + "&nomrte=" + entered_nomrte + "&an_classi=" + entered_an_classi + "&no_chefor=" + entered_no_chefor + "&gestion=" + entered_gestion + "&source=" + entered_source
            })
        }

        //appel de la fonction pour mettre à jour
        updateData();

        //fonction qui permet de redessiner les entitées après modification
        redraw();
    }
}
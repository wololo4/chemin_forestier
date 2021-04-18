//fonction qui permet de supprimer des entitées
function remove(e) {
    //lorsque le boutton "delete" est appuyer
    if(e.target && e.target.id == "delete") {
        //importation de l'information attributaire dans le formulaire
        let entered_id = document.getElementById("input_id2").value;

        //fonction qui permet de retirer une entité de la bd
        function removeData(){
            //requete sql pour supprimer une entité à partir d'un protocole AJAX à l'aide d'un formulaire php
            $.ajax({
                url: "php/remove.php?id=" + entered_id
            })
        }

        //appel de la fonction 
        removeData();

        //fonction pour redessiner la couche mise à jour
        redraw();

    }
}
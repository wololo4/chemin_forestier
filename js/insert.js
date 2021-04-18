//fonction qui permet d'ajouter de nouvelles entitées
function insert(e) {
    //lorsque le boutton "submit" est enclencher
    if(e.target && e.target.id == "submit") {

        //importation des valeurs dans le formulaire de popup 
        let entered_cls_chefor = document.getElementById("input_cls_chefor").value;
        let entered_nomrte = document.getElementById("input_nomrte").value;
        let entered_an_classi = document.getElementById("input_an_classi").value;
        let entered_no_chefor = document.getElementById("input_no_chefor").value;
        let entered_gestion = document.getElementById("input_gestion").value;
        let entered_source = document.getElementById("input_source").value;
        
        // For each drawn layer
        drawnItems.eachLayer(function(layer) {
            //importation du geojson de la nouvelle entité dessiner
            let drawing = JSON.stringify(layer.toGeoJSON().geometry);

            //fonction qui permet d'ajouter une nouvelle entité dans la bd
            function insertData(){
                //requete sql pour ajouter une entité à partir d'un protocole AJAX à l'aide d'un formulaire php
                $.ajax({
                    url: "php/insert.php?draw=" + drawing + "&cls_chefor=" + entered_cls_chefor + "&nomrte=" + entered_nomrte + "&an_classi=" + entered_an_classi + "&no_chefor=" + entered_no_chefor + "&gestion=" + entered_gestion + "&source=" + entered_source
                })
            }

            //appel de la fonction
            insertData();

        });

        // Clear drawn items layer
        drawnItems.closePopup();
        drawnItems.clearLayers();

        //fonction qui permet d'attendre le temps que la requête sql passe avant de redessiner
        function wait(ms){
            var start = new Date().getTime();
            var end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

        //waiting...........
        wait(100);

        //fonction pour redessiner la couche après mise à jour de la bd
        redraw();
    }
}


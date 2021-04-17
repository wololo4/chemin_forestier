function update(e) {

    if(e.target && e.target.id == "submit2") {

        // Get user name and description
        let entered_id = document.getElementById("input_id2").value;
        let entered_cls_chefor = document.getElementById("input_cls_chefor2").value;
        let entered_nomrte = document.getElementById("input_nomrte2").value;
        let entered_an_classi = document.getElementById("input_an_classi2").value;
        let entered_no_chefor = document.getElementById("input_no_chefor2").value;
        let entered_gestion = document.getElementById("input_gestion2").value;
        let entered_source = document.getElementById("input_source2").value;
        
        // For each drawn layer
        //drawnItems.eachLayer(function(layer) {
            
        function updateData(){
            $.ajax({
                url: "php/update.php?id=" + entered_id + "&cls_chefor=" + entered_cls_chefor + "&nomrte=" + entered_nomrte + "&an_classi=" + entered_an_classi + "&no_chefor=" + entered_no_chefor + "&gestion=" + entered_gestion + "&source=" + entered_source
            })
        }

        updateData();
    }
}

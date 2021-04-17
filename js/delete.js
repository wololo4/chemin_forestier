function remove(e) {

    if(e.target && e.target.id == "delete") {

        let entered_id = document.getElementById("input_id2").value;
            
        function deleteData(){
            $.ajax({
                url: "php/delete.php?id=" + entered_id
            })
        }

        deleteData();
    }
}
$(document).ready(function () {
    var $container =$("#container");
    var row="";
    var keys = Object.keys(localStorage), i =keys.length;
    var item;


    while(i--){
        var obj = JSON.parse(localStorage.getItem(keys[i]));
        if (obj.key ==undefined){
            break;
        }
        item = obj.key;
        // row+="<div class='jumbotron jumbotron-fluid mx-4' style='margin-top: 15%;'>";
        // row+="<div class='container'>";
        // row+="<p class='display-4'>"+obj.title+"</p>";
        // row+="<p class='lead'>"+obj.date+"</p>";
        // row+="<button id='"+keys[i]+"' class='btn btn-danger btn-md' type='button'>Remove</button>";
        // row+="</div>";
        // row+="</div>";

        row+="<a href='#' class='list-group-item list-group-item-action flex-column align-items-start' >";
        row+="<div class='d-flex w-100 justify-content-between'>";
        row+="<h5 class='mb-1'>"+obj.title+"</h5>";
        row+="<small></small>";
        row+="</div>";
        row+="<p class='mb-1'>"+obj.date+"</p>";
        row+="<button id='"+keys[i]+"' type='button' class='btn btn-danger'>Remove</button>"
        row+="</a>";


        $container.html(row);

    }


    $('[id^=item-]').on("click", function () {
        localStorage.removeItem(this.id);
        location.reload();
    })

});
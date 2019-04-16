$(document).ready(function () {
    var $container =$("#list");
    var $footer = $("#footer");
    var row="";
    var keys = Object.keys(localStorage), i =keys.length;
    var item;

    $footer.delay(1).animate({ opacity: 1 }, 700)



    while(i--){
        var obj = JSON.parse(localStorage.getItem(keys[i]));
        if (obj.key ==undefined){
            break;
        }
        item = obj.key;
        row+="<a href='#' class='list-group-item list-group-item-action flex-column align-items-start' >";
        row+="<div class='d-flex w-100 justify-content-between'>";
        row+="<h5 class='mb-1'>"+obj.title+"</h5>";
        row+="<small></small>";
        row+="</div>";
        row+="<p class='mb-1'>"+obj.description+"</p>";
        row+="<p class='mb-1'>"+obj.date+"</p>";
        row+="<button id='"+keys[i]+"' type='button' class='btn btn-danger'>Remove</button>"
        row+="</a>";

        $footer.hide();
        $container.html(row);

    }


    $('[id^=item-]').on("click", function () {
        localStorage.removeItem(this.id);
        location.reload();
    })

});
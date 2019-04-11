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
        row+="<div class='jumbotron jumbotron-fluid mx-4' style='margin-top: 15%;'>";
        row+="<div class='container'>";
        row+="<p class='display-4'>"+obj.title+"</p>";
        row+="<p class='lead'>"+obj.date+"</p>";
        row+="<button id='"+keys[i]+"' class='btn btn-danger btn-md' type='button'>Remove</button>";
        row+="</div>";
        row+="</div>";
        $container.html(row);

    }


    $('[id^=item-]').on("click", function () {
        localStorage.removeItem(this.id);
        location.reload();
    })

});
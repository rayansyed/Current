$(document).ready(function () {
    var $title = $("#inputTitle");
    var $desc = $("#inputDesc");
    var $month = $("#inputMonth");
    var $day = $("#inputDay");
    var $year=$("#inputYear");
    var $key =$("#inputKey");
    var $btnCreate =$("#button");




    var counter=0;
    var item = JSON.parse(localStorage.getItem("counter"));
    console.log(item);

    $btnCreate.on("click" ,function () {
        item++;
        var obj = {
            title: $title.val(),
            description: $desc.val(),
            date: $month.val()+ " " + $day.val()+ " " +$year.val(),
            key: "item-"+item
        }

        localStorage.setItem(obj.key,JSON.stringify(obj));
        localStorage.setItem("counter",item);



    });

});
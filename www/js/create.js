$(document).ready(function () {
    var myEvents=[];
    var $title = $("#inputTitle");
    var $desc = $("#inputDesc");
    var $month = $("#inputMonth");
    var $day = $("#inputDay");
    var $year=$("#inputYear");
    var $key =$("#inputKey");
    var $btnCreate =$("#button");



    $btnCreate.on("click" ,function () {

        var obj = {
            title: $title.val(),
            description: $desc.val(),
            date: $month.val()+ " " + $day.val()+ " " +$year.val(),
            key: $key.val()
        }

        localStorage.setItem($key.val(),JSON.stringify(obj));


    });

});
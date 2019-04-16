$(document).ready(function () {

    var $title = $("#inputTitle");
    var $desc = $("#inputDesc");
    var $month = $("#inputMonth");
    var $day = $("#inputDay");
    var $year=$("#inputYear");
    var $key =$("#inputKey");
    var $btnCreate =$("#button");
    var $pop=$("#pop");



    var counter=0;
    var item = JSON.parse(localStorage.getItem("counter"));
    console.log(item);

    $btnCreate.on("click" ,function () {
        event.preventDefault();
        item++;
        var obj = {
            title: $title.val(),
            description: $desc.val(),
            date: $month.val()+ " " + $day.val()+ " " +$year.val(),
            key: "item-"+item
        }

        var tit=$title.val().trim();;
        var descrip=$desc.val().trim();;

        if ((tit.length<1) && (descrip.length<1)){
            showPopup("title and description empty!");
            return true;
        }else
            if (tit.length<1) {
            showPopup("title cannot be empty!");
            return true;
        }else
        if (descrip.length<1) {
            showPopup("description cannot be empty!");
            return true;
        }else{

        localStorage.setItem(obj.key,JSON.stringify(obj));
        localStorage.setItem("counter",item);

        window.location.replace("myevents.html");

    }

    });


    function showPopup(message) {
        $pop.html('<p>'+message+'</p>').popup("open");
        setTimeout(function(){  $pop.popup("close"); }, 1000);
    }

});
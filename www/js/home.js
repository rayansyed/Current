$(document).ready(function initApp () {
   // window.localStorage.clear();

    var counter=0;
    var key=0;
    var keys = Object.keys(localStorage);
    var i =keys.length;
    var obj = JSON.parse(localStorage.getItem(keys[i]));


    if(JSON.parse(localStorage.getItem("counter")) == null){
        localStorage.setItem("counter",counter);

    }

    var card = document.getElementById("cardBody");

    var data=null;

    var url = "https://api.myjson.com/bins/cqwfc?fbclid=IwAR0GFMbqBAG-Kk6oY1PBY55fdZdmVGrd2htik-5jMqwPVO7JiGc07BvasVM";

    var xhr=new XMLHttpRequest();

    var footer = $("#footer");


    xhr.onreadystatechange = function (evt) {
        if(this.readyState == XMLHttpRequest.OPENED){
            console.log("please wait")
        }
        else if(this.readyState == XMLHttpRequest.DONE){
            if(this.status=200){

                footer.text("No More Events To Display");
                data = JSON.parse(this.responseText);
                var row = "";

                for(;key < data.section.event.length ;++key){
                    var obj = data.section.event[key];
                    row+="<div class='row'>";
                    row+="<div class='card mx-auto mt-4' style='width: 18rem'>";
                    row+="<img class='card-img-top' src="+obj.detail.image+" alt='Card image cap'>";
                    row+="<div id='cardBody' class='card-body'>";
                    row+="<h5 class='card-title'>"+obj.detail.title+"</h5>";
                    row+="<p class='card-text'>"+obj.detail.description+"</p>";
                    row+="<button type='button' class='btn btn-dark' data-toggle='modal' data-target='#"+obj.detail.key+"'>Details</button>";
                    row+="</div>";
                    row+="</div>";
                    row+="</div>";

                    row+="<div class='modal fade' id='"+obj.detail.key+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>";
                    row+="<div class='modal-dialog modal-dialog-centered' role='document'>";
                    row+="<div class='modal-content'>";
                    row+="<div class='model-header'>";
                    row+="<h5 class='modal-title mt-2 mx-3' id='exampleModalLongTitle'>"+obj.detail.title+"</h5>";
                    row+="</div>";
                    row+="<div class='model-body mt-2 mx-3' id='detail-"+key+"'>"+obj.detail.description+"</div><div id='date-"+key+"'>  </br> "+obj.detail.date+"</div>";
                    row+="<div class='modal-footer'>";
                    row+="<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>";
                    row+="<button id='item-"+key+"' type='button' class='btn btn-success'>Add To My Events</button>";
                    row+="<button id='location-"+key+"' type='button' class='btn btn-light'>Location</button>";
                    row+="<p>keys[i]</p>";

                    row+="</div>";
                    row+="</div>";
                    row+="</div>";
                    row+="</div>";
                }

            }
            else{
                row="<div>Error: cannot get data!</div>";
            }
            card.innerHTML=row;
            card.style.visibility = "visible";



            $('[id^=item-]').on("click", function () {
                var updateCounter = JSON.parse(localStorage.getItem("counter"));
                updateCounter++;
                localStorage.setItem("counter",updateCounter);
                var item= this.id.substr(5,2);

                $.getJSON("https://api.myjson.com/bins/cqwfc?fbclid=IwAR0GFMbqBAG-Kk6oY1PBY55fdZdmVGrd2htik-5jMqwPVO7JiGc07BvasVM",function () {

                    var obj = {
                        title: data.section.event[item].detail.title,
                        description: data.section.event[item].detail.description,
                        date: data.section.event[item].detail.date,
                        key: "item-"+updateCounter
                    }
                    localStorage.setItem(obj.key,JSON.stringify(obj));
                })


            })


            $('[id^=location-]').on("click", function () {
                console.log("hello");
            })
        }

    };
    //event.preventDefault();
    xhr.open("GET", url + "?" + (new Date()).getTime(), true);
    xhr.timeout = 6000;
    xhr.send();





    $(document).ready(function(){
        $("#input").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#cardBody .row").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

});
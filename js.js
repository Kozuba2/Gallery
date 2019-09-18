var currentplacehold = 0;
var placehold = [];
placehold[0] = 'images/1.jpeg';
placehold[1] = 'images/2.jpg';
placehold[2] = 'images/3.jpg';
placehold[3] = 'images/4.jpg';
placehold[4] = 'images/5.jpg';


function chan(){
    
        currentplacehold++;
        if(currentplacehold > 4) currentplacehold = 0;
      $("#gall").css("background-image","url('" + placehold[currentplacehold] + " ')");
    
      setTimeout(chan,6000)
    };

$(document).ready(function (){
    $("#gall").css("background-image","url('" + placehold[0] + " ')");
    setTimeout(chan,6000)

});


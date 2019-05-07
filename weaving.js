$(document).ready(function(){
console.log("working or NAH?")

var colorArray = ["lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "red", "darkred", "coral", "tomato", "orangered", "gold", "orange", "darkorange", "	lightyellow", "	lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "yellow", "lawngreen", "chartreuse", "limegreen", " lime", "forestgreen", "green", "darkgreen", "greenyellow", "yellowgreen", "springgreen", "mediumspringgreen","lightgreen", "palegreen", "darkseagreen", "	mediumseagreen", "seagreen", "olive","darkolivegreen", "olivedrab", "lightcyan", "cyan", "aqua", "	aquamarine", "mediumaquamarine", "paleturquoise", "turquoise", "mediumturquoise", "darkturquoise", "	lightseagreen", "cadetblue", "darkcyan", "teal"];
var counter = 0; 
// var pictureTop = $(".picture").offset().top;
// var boxTop = $(".color").scrollTop();
// var colorTop = $(".color").offset().top;


    $(".color1").click(function () {
        $(".color1").css("background-color", colorArray[counter]);
        counter++;
        console.log("ok pls work")
    });

});
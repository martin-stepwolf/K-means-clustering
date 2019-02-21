var points = [];
function Add_point(){
    points.push([parseInt($("#value-x").val()) ,parseInt($("#value-y").val())]);
    Grafica(points);
console.log(points);
$("#texto").text(points);    
}
$(document).ready(function(){
    Grafica();
    $("#value-x").val("0");
    $("#value-y").val("0");
});
var points = [];
var random = [];
function Add_point(){
    points.push([parseInt($("#value-x").val()) ,parseInt($("#value-y").val())]);
    Grafica(points, random);
$("#texto").text(points);    
}
function Add_random(){
  random = [];
  random.push([Math.round(Math.random()*100) ,Math.round(Math.random()*60)]);
  random.push([Math.round(Math.random()*100) ,Math.round(Math.random()*60)]);
Grafica(points, random);
}
$(document).ready(function(){
    Grafica();
    $("#value-x").val("0");
    $("#value-y").val("0");
});
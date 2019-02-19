var points = [['10','20','#ff0000'],['10','20','#00ff00'],['10','20','#0000ff'],['10','20','#ffff00']];
function Add_point(){
    points.push([$("#value-x").val() ,$("#value-y").val() , $("#value-color").val()])
console.log(points);
$("#texto").text(points);    
}
$(document).ready(function(){
    $("#value-x").val("0");
    $("#value-y").val("0");
});
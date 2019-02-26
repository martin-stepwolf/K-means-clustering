$(document).ready(function(){
  Grafica();
  $("#value-x").val("0");
  $("#value-y").val("0");

 	$.get('Quiz 1 grades.csv', function(csvFile){
        points= parseCSVData(csvFile);
        //console.log(points);
        var rand = [];
        Grafica(points);
    });
});

var points = [[0,0],[100,60],[25,15],[75,45],[50,30]];
var random = [];
var random_ant=[];
var cont = 0;
var cluster_values = [];
var clusterColors = ['rgba(255, 0, 0, .6)','rgba(0, 255, 0, .6)','rgba(0, 0, 255, .6)','rgba(255, 255, 0, .6)','rgba(255, 0, 255, .6)',
'rgba(0, 255, 255, .6)','rgba(0, 125, 200, .6)','rgba(255, 125, 125, .6)','rgba(125, 125, 255, .6)','rgba(255, 125, 255, .6)'];
clusterColors.sort(function() {return Math.random() - 0.5});

function Add_point(){
    points.push([parseInt($("#value-x").val()) ,parseInt($("#value-y").val())]);
    Grafica();
}

function Add_random(){
  var rando = $("#value-point").val();
    var that = 0;
    random = [];
	for(var i = 0; i<rando; i++){
	random.push([Math.round(Math.random()*100) ,Math.round(Math.random()*60)]);
  }
  Grafica();
}
function Do_algoritm(){
	console.log(random_ant);			
	if((cont_array())==true){
		console.log("valor de random igual");
		clearTimeout(myVar);
	}
			med_asig();
			Promedio();
			Grafica2();
}

function cont_array()
{
	if((random_ant.slice())=="")
	{
		random_ant=random.slice();
		return true;
	}
	else
	{
		if ((random.slice().toString())==(random_ant.slice().toString())) {
			return true;
		}
		else {
			random_ant=random.slice();
			return false;
		}
	}
}

function ValidaCampos(){
if((parseInt($("#value-x").val())>=101) || (parseInt($("#value-y").val())>=61)){
  alert("Invalid values. You need to add a grade less than 100 and time less than 60.");
}else if(Add_point());
}

function Promedio(){
	var x=0;
	var y=0;
	var xx=0;
	var yy=0;
	for(var j=0; j<random.length; j++){
		for(var i=0; i<cluster_values[j].length; i++){
			x=x+cluster_values[j][i][0];
			y=y+cluster_values[j][i][1];
		}
		if(cluster_values[j].length!=0){
			var xx=x/cluster_values[j].length;
			var yy=y/cluster_values[j].length;
			random[j] = [xx,yy];
		}
		else{
			random[j] = [Math.round(Math.random()*100) ,Math.round(Math.random()*60)];
		}
		x=0;
		y=0;
	}
}
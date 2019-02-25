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
var cluster_values = [];
var clusterColors = ['rgba(255, 0, 0, .8)','rgba(0, 255, 0, .8)','rgba(0, 0, 255, .8)','rgba(255, 255, 0, .8)','rgba(255, 0, 255, .8)',
'rgba(0, 255, 255, .8)','rgba(0, 125, 200, .8)','rgba(255, 125, 125, .8)','rgba(125, 125, 255, .8)','rgba(255, 125, 255, .8)'];
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
  med_asig();
//random = Promedio();// funcion para asignar el nuevo valor de los clusters(su promedio)
  Grafica2();  
}

function cont_array()
{
	if((random_ant.slice())=="")
	{
		random_ant=random.slice();
	}
	else
	{
		if ((random.slice().toString())==(random_ant.slice().toString()))
		{
			alert("True"+random.slice()+"..."+random_ant.slice());			
		}
		else
		{
			alert("False"+random.slice()+"..."+random_ant.slice());
			random_ant=random.slice();
		}
	}
}

function ValidaCampos(){
if((parseInt($("#value-x").val())>=101) || (parseInt($("#value-y").val())>=61)){
  alert("Invalid values. You need to add a grade less than 100 and time less than 60.");
}else if(Add_point());
}

function Promedio(){
var promedio_random =[];

// sacar el promedio de las distancias del cada cluster con sus puntos asignados
// Despues de sacar el promedio sobreescribir los valores nuevos a random
// El programa hecho con chuy no funciona, ya que se trata del promedio de las distancias de cada cluster con sus puntos
// no el promedio de los puntos de cada cluster
// se puede reciclar codigo hecho por chuy que se puede ver desde git

  return  promedio_random;
}
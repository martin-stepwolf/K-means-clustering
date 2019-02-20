var points = [];
var random = [];
var pointsColor= []

function Add_point(){
    points.push([parseInt($("#value-x").val()) ,parseInt($("#value-y").val())]);
    Grafica(points, random);
console.log(points);    
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
function Grafica(points, random){
  Highcharts.chart('grafica', {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Table points'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Grades'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Time'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 60,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} grade, {point.y} minutes'
          }
        }
      },
      series: [{
        name: 'Points',
        color: 'rgba(0, 0, 255, .8)',
        data: points
      },
      {
        name: 'Clusters',
        color: 'rgba(0, 255, 0, .8)',
        data: random
      },]
    });
  }
  function Grafica_color(clusters){
    pointsColor= []
    for(var a=0; a<clusters ;a++){
    pointsColor.push({
      name: "Cluster " +(a+1),
      color: 'rgba(0, 0, 255, .8)',
      data: points
    })
  }
  console.log(pointsColor);

  }
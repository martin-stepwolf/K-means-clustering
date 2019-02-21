var points = [];
var random = [];
var cluster_values = [[[10,23],[12,60]],[[19,2],[12,43]],[[12,53],[8,5]]];//ejemplo
var clusterColors = ['rgba(255, 0, 0, .8)','rgba(0, 255, 0, .8)','rgba(0, 0, 255, .8)','rgba(255, 255, 0, .8)','rgba(255, 0, 255, .8)',
'rgba(0, 255, 255, .8)','rgba(0, 125, 200, .8)','rgba(255, 125, 125, .8)','rgba(125, 125, 255, .8)','rgba(255, 125, 255, .8)'];
clusterColors.sort(function() {return Math.random() - 0.5});

function Add_point(){
    points.push([parseInt($("#value-x").val()) ,parseInt($("#value-y").val())]);
    Grafica(points, random);
    $("#texto").text(points);
    console.log(points);    
}

function Add_random(){
  random = [];
  random.push([Math.round(Math.random()*100) ,Math.round(Math.random()*60)]);
  random.push([Math.round(Math.random()*100) ,Math.round(Math.random()*60)]);
//Grafica(points, random);
Grafica2();
}

$(document).ready(function(){
    Grafica();
    $("#value-x").val("0");
    $("#value-y").val("0");




    $.get('Quiz 1 grades.csv', function(csvFile){
        var data = parseCSVData(csvFile);
        var rand = [];
        Grafica(data);

        
    });

    function parseCSVData(csvFile){

      //empty array for stroring the chart data
      var data= [];

      //cut CSV data into lines
      var lines = csvFile.split("\n");


      $.each(lines, function(lineNumber,line){
        if(lineNumber !=0 ){//skip header line
            var fields = line.split(",");
            if(fields.length == 2){//skip invalid lines
              
              var value = parseFloat(fields[0]);
              data.unshift([value])
            }
        }

      });

      //reverse arry since Higcharts expects the data to be sorted in ascending order
      return data.reverse();

    }






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
        color: 'rgba(125, 125, 125, .8)',
        data: points
      },
      {
        name: 'Clusters',
        color: 'rgba(0, 0, 0, 1)',
        data: random
      },]
    });
  }

  function Grafica_color(clusters){
    var pointsColor= []
    pointsColor.push({
      name: 'Clusters-points',
      color: 'rgba(0, 0, 0, 1)',
      data: random
    });
    for(var a=0; a<clusters ;a++){
    pointsColor.push({
      name: "Cluster " +(a+1),
      color: clusterColors[a],
      data: cluster_values[a],
    });
  }
  return pointsColor;
  }

  function Grafica2(){
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
        series: [Grafica_color(cluster_values.length)[0],
        Grafica_color(cluster_values.length)[1],
        Grafica_color(cluster_values.length)[2],
        Grafica_color(cluster_values.length)[3],
      ]
      });
    }
  




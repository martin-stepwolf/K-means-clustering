function Grafica(){
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
        series: Grafica_color(cluster_values.length)
      });
    }

        function med_asig() {
            var c1=[];
            var c2=[];
            var c3=[];
            var c4=[];
            var c5=[];
            var c6=[];
            var c7=[];
            var c8=[];
            var c9=[];
            var c10=[];
            
            cluster_values = [];
            for (var clus = 1; clus < random.length; clus++){
              cluster_values.push([],);
            }
            var assignments = [];
            for (var i = 0; i < points.length; i++) {
              var point = points[i];
              var distances = [];
          
              var cluster=0;
              var puntos_cerca=0;
              var menor = 300;
              for (var j = 1; j < random.length; j++) {
                var mean = random[j];
                var sum = 0;
          
                /* We calculate the Euclidean distance.
                 * √((pi-qi)^2+...+(pn-qn)^2)
                 */
          
                for (var dim = 0; dim < point.length; dim++) {
                  // dif = (pn - qn)
                  var difference = point[dim] - mean[dim];
          
                  // dif = (dif)^2
                  difference = Math.pow(difference, 2);
          
                  // sum = (difi) + ... + (difn)
                  sum += difference;
                }
          
                // √sum
                distances[j] = Math.sqrt(sum);
                console.log("del punto ("+points[i]+") al cluster ("+random[j]+") son "+ distances[j]);
                if(distances[j]<menor){
                  menor = distances[j];
                  puntos_cerca = points[i];
                  cluster = j;
                }
              }
              console.log("el cluster "+cluster+" es mas cercano al punto "+ puntos_cerca);
              console.log("---------");
            if(cluster == 1)
            c1.push(puntos_cerca);
            if(cluster == 2)
            c2.push(puntos_cerca);
            if(cluster == 3)
            c3.push(puntos_cerca);
            if(cluster == 4)
            c4.push(puntos_cerca);
            if(cluster == 5)
            c5.push(puntos_cerca);
            if(cluster == 6)
            c6.push(puntos_cerca);
            if(cluster == 7)
            c7.push(puntos_cerca);
            if(cluster == 8)
            c8.push(puntos_cerca);
            if(cluster == 9)
            c9.push(puntos_cerca);
            if(cluster == 10)
            c10.push(puntos_cerca);
          
              //cluster_values.push(puntos_cerca)[(cluster-1)];
              // After calculating all the distances from the data point to each cluster centroid,
              // we pick the closest (smallest) distances.
              assignments[i] = distances.indexOf(Math.min.apply(null, distances));
            }
            if(random.length>1)
          cluster_values[0] = c1;
          if(random.length>2)
          cluster_values[1] = c2;
          if(random.length>3)
          cluster_values[2] = c3;
          if(random.length>4)
          cluster_values[3] = c4;
          if(random.length>5)
          cluster_values[4] = c5;
          if(random.length>6)
          cluster_values[5] = c6;
          if(random.length>7)
          cluster_values[6] = c7;
          if(random.length>8)
          cluster_values[7] = c8;
          if(random.length>9)
          cluster_values[8] = c9;
          if(random.length>10)
          cluster_values[9] = c10;
          };

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
      
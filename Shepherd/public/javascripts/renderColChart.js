      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Version 1', 'Version 2', 'Version 3', 'Version 4', 'Version 5', 'Version 6', 'Version 7', 'Version 8'],
          ['Visual Studio',  1000,           400,         355,          5,           3,           12,          20,          20    ],
          ['Eclipse',  1170,           460,          87,         355,          5,           3,           12,          20,   ],
          ['uTorrent',  660,            1120,         48,         355,          5,           3,           12,          20,   ],
          ['Chrome',  1030,           540,         0,          355,          5,           3,           12,          20,    ]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'what', titleTextStyle: {color: 'black'}}
         // yAxis: {title: 'What', titleTextStyle: {color: 'black'}}     
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        //chart.draw(data, options);
        
        chart.draw(data, {isStacked: true, width: 500, height: 500, title: 'How Many Servers Running Software Versions?',
                              vAxis: {title: 'Number of Servers Running', titleTextStyle: {color: 'black'}},
                              hAxis: {title: 'Software', titleTextStyle: {color: 'black'}},
                              series: [{color: 'blue', visibleInLegend: true}, {color: 'red', visibleInLegend: true}]
                             });
      }

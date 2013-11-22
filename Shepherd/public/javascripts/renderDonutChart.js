function DonutChart(title, params) {

      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var donut = [];
          for (name in params){
              var values = new Array();
              values.push(name);
              values.push(params[name]);
              donut.push(values);
          };
        var data = google.visualization.arrayToDataTable(

          donut
          //[['data', 'test'], ['some', 10]]
        );
        var options = {
          title: title,
          pieHole: 0.4,
          width: 800, 
          height: 800
        };
        var chart = new google.visualization.PieChart(document.getElementById('donutChart_div1'));
        chart.draw(data, options);
      }
}

params = {
  Heath: 'Status',
  Good: 100000,
  Mental: 1000,
  Dead: 500,
  Contagious: 500,
  ILikeRainBows: 2000
}
DonutChart('Health status', params);

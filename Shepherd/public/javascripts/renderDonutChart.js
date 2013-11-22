function DonutChart(title, params) {

      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var donut;
        for (name in params){
          if (name != '_id'){
            var values = new Array();
            data.addColumn('string', name);
            values.push(name);
            values.push(params[name] + '');
            donut.push(values);
          }
        };
        var data = google.visualization.arrayToDataTable(donut);
        var options = {
          title: params.title,
          pieHole: 0.4,
        };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
}

params = {
  count: 10.
  data: 15
};
DonutChart('title', params);

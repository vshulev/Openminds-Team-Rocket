function ColChart(params){      

  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Software', 'Version 1', 'Version 2', 'Version 3', 'Version 4', 'Version 5', 'Version 6', 'Version 7', 'Version 8'],
      ['SoftwarePackageAAA',  1000,           400,         355,          5,           3,           12,          20,          20    ],
      ['SoftwarePackageAAC',  1170,           450,          87,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAD',  60,            320,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAE',  660,            120,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAF',  560,            2120,         48,         455,          5,           3,           12,          20   ],
      ['SoftwarePackageAAG',  360,            4120,         48,         55,          5,           3,           12,          20  ],
      ['SoftwarePackageAAH',  560,            3120,         48,         55,          5,           3,           12,          20   ],
      ['SoftwarePackageAAI',  760,            120,         48,         55,          5,           3,           12,          20   ],
      ['SoftwarePackageAAJ',  260,            620,         48,        35,          5,           3,           12,          20   ],
      ['SoftwarePackageAAK',  760,            620,         48,         35,          5,           3,           12,          20   ],
      ['SoftwarePackageAAL',  260,            130,         48,         55,          5,           3,           12,          20   ],
      ['SoftwarePackageAAM',  660,            20,         48,         555,          5,           3,           12,          20   ],
      ['SoftwarePackageAAN',  660,            120,         48,         55,          5,           3,           12,          20   ],
      ['SoftwarePackageAAO',  60,            120,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAP',  30,            0,         48,         355,          5,           3,           12,          20  ],
      ['SoftwarePackageAAQ',  860,            0,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAR',  30,            10,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAS',  160,            110,         48,         355,          5,           3,           12,          20   ],
      ['SoftwarePackageAAT',  0,           50,         0,          355,          5,           3,           12,          20    ]
      ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('colChart_div1'));

    chart.draw(data, {isStacked: true, width: 1000, height: 350, title: 'How Many Servers Running Software Versions?',
      vAxis: {title: 'Number of Servers Running', titleTextStyle: {color: 'black'}},
      hAxis: {title: 'Software', titleTextStyle: {color: 'black'}},
      series: [{color: 'blue', visibleInLegend: true}, {color: 'red', visibleInLegend: true}]
    });
  }
}

var params = {
};

ColChart(params);
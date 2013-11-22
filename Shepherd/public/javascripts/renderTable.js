function MachineTable(params) {
      google.load('visualization', '1', {packages:['table']});
      google.setOnLoadCallback(drawTable);

      function drawTable() {
        var values = [];
        var data = new google.visualization.DataTable();
        for (name in params){
          data.addColumn('string', name);
          values.push(params[name] + '');
        };

        data.addRows([values]);

        var table = new google.visualization.Table(document.getElementById('table_div1'));
        table.draw(data, {showRowNumber: false});
      }
}

function SoftwareList(params) {
      google.load('visualization', '1', {packages:['table']});
      google.setOnLoadCallback(drawTable);

      function drawTable() {
        var rows = []
        var data = new google.visualization.DataTable();
        var size = 0;
        for (name in params){
          data.addColumn('string', name);
          size = params[name].length;
        };
        
        console.log(size);
        for (i = 0; i < size; i++){
          var values = new Array();
          for (name in params){
            values.push(params[name][i] + '');
          };
          rows.push(values);
          console.log(values.length);
          console.log(rows);
        }


        data.addRows(rows);

        var table = new google.visualization.Table(document.getElementById('table_div2'));
        table.draw(data, {showRowNumber: false});
      }
}


var data = {
    ServerName: 'SRVW0000013452',
    Location: 'London',
    Type: 'VMware Virtual',
    Cores: 2,
    Memory: 16,
    Owner: 'FX',
    OS: 'Windows 2003 R2',
    BuildDate: '2011-06-25',
    Health: 'Good',
    LastReboot: '2012-08-15',
    LastInventory: '2013-10-06'
  };

var software = {
    AppName: ['eclipse', 'skype', 'ff', 'ie'],
    version: [5,2,3,1]
};

var params = {
  data: data,
  software: software
};

MachineTable(data);
SoftwareList(software);
//MachineTable(JSON.parse($('#jsondata').text()));

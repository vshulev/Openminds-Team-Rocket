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

        data.addRows([
          values
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(data, {showRowNumber: true});
      }
}

var params = {
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

MachineTable(params);
//MachineTable(JSON.parse($('#jsondata').text()));

// WEBSITE ANALYSTIC CHART START
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

// PIE CHART FOR EMAIL START

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Language", "Speakers (in millions)"],
    ["Assamese", 13],
    ["Bengali", 83],
    ["Bodo", 1.4],
    ["Dogri", 2.3],
    ["Gujarati", 46],
    ["Hindi", 300],
    ["Kannada", 38],
    ["Kashmiri", 5.5],
    ["Konkani", 5],
    ["Maithili", 20],
    ["Malayalam", 33],
    ["Manipuri", 1.5],
    ["Marathi", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["Punjabi", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Tamil", 61],
    ["Telugu", 74],
    ["Urdu", 52],
  ]);

  var options = {
    title: "Indian Language Use",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },

    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

// order chart//
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Move', 'User'],
    ["Monday", 70],
    ["Tuesday", 50],
    ["Wednesday", 40],
    ["Thusday", 30],
    ["Friday'", 55],
    ["Saturday", 50],
    ["Sunday", 65],
  ]);

  var options = {
    legend: { position: 'none' },
    colors: ['#78715f',],
    chart: {
    },
    axes: {
      x: {
        0: { side: 'top', label: 'This Week' } // Top x-axis.
      }
    },
    bar: { groupWidth: "15%" }
  };

  var chart = new google.charts.Bar(document.getElementById('order-chart'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};

// user chart//

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'orders',],
    ['2001', 10,],
    ['2002', 14,],
    ['2003', 16,],
    ['2004', 22,],
    ['2005', 28,],
    ['2006', 20,],
    ['2007', 30,]
  ]);

  var options = {
    colors: ['#C6013C',],
    chart: {

    }
  };

  var chart = new google.charts.Bar(document.getElementById('user-chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}



// order chartgoogle.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Time of Day');
  data.addColumn('number', 'Motivation Level');
  data.addColumn('number', 'Energy Level');
  // data.addColumn('number', ' Level');

  data.addRows([
    [{ v: [8, 0, 0], f: '8 am' }, 1, .25],
    [{ v: [9, 0, 0], f: '9 am' }, 2, .5],
    [{ v: [10, 0, 0], f: '10 am' }, 3, 1],
    [{ v: [11, 0, 0], f: '11 am' }, 4, 2.25],
    [{ v: [12, 0, 0], f: '12 pm' }, 5, 2.25],
    [{ v: [13, 0, 0], f: '1 pm' }, 6, 3],
    [{ v: [14, 0, 0], f: '2 pm' }, 7, 4],
    [{ v: [15, 0, 0], f: '3 pm' }, 8, 5.25],
    [{ v: [16, 0, 0], f: '4 pm' }, 9, 7.5],
    [{ v: [17, 0, 0], f: '5 pm' }, 10, 10],
  ]);

  var options = {
    title: 'Motivation and Energy Level Throughout the Day',
    colors: ['#9575cd', '#33ac71', '#9575cd'],
    hAxis: {
      title: 'Time of Day',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0],

      }
    },
    vAxis: {
      title: 'Rating (scale of 1-10)'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById(''));
  chart.draw(data, options);
}

// order startus pie chart
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Week',    2],
      ['Month',      3],
      ['Year',  5],
      ['All order', 7 ],
      ]);

      var options = {
        // title: 'My Daily Activities'
        };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
      }
    

function newChart(id, lineSelect=false, legend=true) {
    var chart = am4core.create(id, am4charts.XYChart);
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "x0";
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    if (legend) {
        chart.legend = new am4charts.Legend();
        if (!lineSelect) {
            chart.legend.itemContainers.template.clickable = false;
            chart.legend.itemContainers.template.focusable = false;
            chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
        }
    }

    chart.lines = 0;

    return chart;
}

function newLine(name, chart, stroke='#444', fill=null) {
    var series = chart.series.push(new am4charts.LineSeries());
    series.name = name;
    series.dataFields.categoryX = "x" + chart.lines;
    series.dataFields.valueY = "y" + chart.lines;
    series.strokeWidth = 2;
    series.stroke = am4core.color(stroke);
    if (fill != null) {
        series.fill = am4core.color(fill);
        series.fillOpacity = 0.4;
    }

    series.number = chart.lines;
    chart.lines += 1;
    return series;
}

function addValue(chart, series, x, y) {
    d = {}
    d["x" + series.number] = x;
    d["y" + series.number] = y;
    chart.data.push(d);
}

function addFunction(chart, f, xMin, xMax) {
    series = newLine(f[1], chart, f[2], f[3]);
    var xInc = (xMax - xMin) / 1000;
    for (var x = xMin; x <= xMax; x += xInc) {
        addValue(chart, series, x, f[0](x));
    }
}

function addFunctions(chart, fs, xMin, xMax) {
    try {
        fs[0][0].length;
    } catch(e) {
        fs = [fs];
    }
    fs.forEach(function(f) {
        addFunction(chart, f, xMin, xMax);
    });
}

function gaussian(x, mu, std, scale=1) { return scale * Math.exp(-Math.pow(x - mu, 2) / (2 * Math.pow(std, 2))) / (Math.sqrt(2 * Math.PI) * std) }

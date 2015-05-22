provincesMap = {"cn":0,"bj":1,"tj":2,"hebei":3,"sx1":4,
               "nmg":5,"ln":6,"gl":7,"hlj":8,"sh":9,
               "js":10,"zj":11,"ah":12,"fj":13,"jx":14,
               "sd":15,"henan":16,"hubei":17,"hunan":18,"gd":19,
               "gx":20,"hainan":21,"cq":22,"sc":23,"gz":24,
               "yn":25,"xz":26,"sx3":27,"gs":28,"qh":29,
               "nx":30,"xj":31};

var selectedProvince;
var IndexOfSelectedProvince;

drawdata = {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Source: 国家统计局'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'RMB'
        },
        labels: {
            formatter: function() {
                return this.value +'￥'
            }
        }
    },
    tooltip: {
        crosshairs: true,
            shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
            }
        }
    },
    series: [{
        name: '',
        marker: {
            symbol: 'square'
        },
        data: []
    }]
};

drawdata1 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: '1978-2013年 '
    },
    subtitle: {
        text: 'Source: 国家统计局'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'GDP增长率'
        },
        labels: {
            formatter: function() {
                return this.value
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '',
        marker: {
            symbol: 'square'
        },
        data: []
    }]
};

function drawLineGraph()
{
    selectedProvince = $("#selectProvince").val();
    IndexOfSelectedProvince = provincesMap[selectedProvince];

    drawdata.xAxis.categories = perCapitaGDP.list[0].value;
    drawdata.series[0].name = perCapitaGDP.list[IndexOfSelectedProvince].name;
    drawdata.series[0].data = perCapitaGDP.list[IndexOfSelectedProvince].value;
    drawdata.title.text =  '1978-2013年 ' + perCapitaGDP.list[IndexOfSelectedProvince].name + ' 人均GDP';

    $(function () {
        $('#container').highcharts(drawdata);
    });

    drawdata1.xAxis.categories = perGDPIncreaseRate.list[0].value;
    drawdata1.series[0].name = perGDPIncreaseRate.list[IndexOfSelectedProvince].name;
    drawdata1.series[0].data = perGDPIncreaseRate.list[IndexOfSelectedProvince].value;
    drawdata1.title.text =  '1978-2013年 ' + perGDPIncreaseRate.list[IndexOfSelectedProvince].name + ' 人均GDP增长率';

    $(function () {
        $('#container1').highcharts(drawdata1);
    });
}




$(document).ready(function() {

    $.getJSON(
        'https://blockchain.info/charts/market-price?daysAverageString=7&format=json&cors=true',
        function(data) {
            console.log(data);
            Highcharts.chart('container', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'BTC Live Chart'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'From <a href="http://codelife.ml" target="_blank">Codelife</a>' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Amount (INR)'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        turboThreshold: 0
                    }
                },

                tooltip: {
                    formatter: function() {
                        var date = new Date(this.x*1000);
                        var dateStr = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
                        var tooltip = '<b>' + dateStr + '</b><br/><b>' + this.series.name + '</b>: ';

                        if (this.y === 0.00001) {
                            tooltip += '<= 0.00001';
                        } else {
                            if (this.y % 1 != 0 && this.y <= 10) {
                                tooltip += Highcharts.numberFormat(this.y, 3, '.', ',');
                            } else {
                                tooltip += Highcharts.numberFormat(this.y, 0, '.', ',');
                            }
                        }

                        return tooltip;
                    }
                },
                series: [{
                    type: 'area',
                    name: 'Rupee',
                    data: data.values
                }]
            });
        }
    );


    // $.getJSON(
    //     'https://api.blockchain.info/charts/market-price?format=json&cors=true',
    //     function(data) {

    //         Highcharts.chart('container', {
    //             chart: {
    //                 renderTo: 'graph_container',
    //                 defaultSeriesType: 'line',
    //                 marginRight: 25,
    //                 marginBottom: 40,
    //                 plotBackgroundColor: null,
    //                 plotBorderWidth: null,
    //                 plotShadow: false,
    //                 zoomType: 'x',
    //                 reflow: true,
    //                 resetZoomButton: {
    //                     position: {
    //                         align: 'right', // by default
    //                         verticalAlign: 'top', // by default
    //                         x: -100,
    //                         y: -25
    //                     },
    //                     relativeTo: 'chart'
    //                 }
    //             },
    //             title: {
    //                 text: 'BTCs'
    //             },
    //             exporting: { enabled: false },
    //             subtitle: {
    //                 text: 'From Codelife'
    //             },
    //             xAxis: {
    //                 type: 'datetime'
    //             },
    //             yAxis: {
    //                 labels: {
    //                     formatter: function() {
    //                         if (this.value === 0.00001) {
    //                             return 0;
    //                         } else if (this.value < 10) {
    //                             return Highcharts.numberFormat(this.value, 4, '.', ',');
    //                         } else {
    //                             return Highcharts.numberFormat(this.value, 0, '.', ',');
    //                         }
    //                     }
    //                 },
    //                 type: 'linear',
    //                 showFirstLabel: false,
    //                 title: {
    //                     text: 'Measurement'
    //                 },
    //                 plotLines: [{
    //                     width: 1,
    //                     color: '#808080'
    //                 }]
    //             },
    //             tooltip: {
    //                 formatter: function() {
    //                     var date = new Date(this.x);
    //                     var dateStr = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    //                     var tooltip = '<b>' + dateStr + '</b><br/><b>' + this.series.name + '</b>: ';

    //                     if (this.y === 0.00001) {
    //                         tooltip += '<= 0.00001';
    //                     } else {
    //                         if (this.y % 1 != 0 && this.y <= 10) {
    //                             tooltip += Highcharts.numberFormat(this.y, 3, '.', ',');
    //                         } else {
    //                             tooltip += Highcharts.numberFormat(this.y, 0, '.', ',');
    //                         }
    //                     }

    //                     return tooltip;
    //                 }
    //             },
    //             plotOptions: {
    //                 series: {
    //                     marker: {
    //                         enabled: false
    //                     },
    //                     states: {
    //                         hover: {
    //                             enabled: false
    //                         }
    //                     }
    //                 }
    //             },
    //             credits: {
    //                 enabled: false
    //             },
    //             legend: {
    //                 layout: 'vertical',
    //                 align: 'right',
    //                 verticalAlign: 'top',
    //                 x: -10,
    //                 y: 100,
    //                 borderWidth: 0
    //             },
    //             series: [{
    //                 name: 'BTC',
    //                 showInLegend: false,
    //                 data:data.values
    //             }],
    //             colors: ['#039bd3'],
    //             navigation: {
    //                 buttonOptions: {
    //                     height: 20,
    //                     width: 20,
    //                     symbolSize: 20,
    //                     symbolX: 10,
    //                     symbolY: 10,
    //                     y: -40,
    //                     x: -15
    //                 },
    //                 menuItemStyle: {
    //                     fontSize: "13px",
    //                     fontFamily: "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
    //                     marginBottom: "2px"
    //                 }
    //             }
    //         });


    //     });


});
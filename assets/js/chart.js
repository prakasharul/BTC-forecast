$(document).ready(function() {
    // chart script
    //https://www.highcharts.com/samples/data/aapl-c.json
    //https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json
    $.getJSON('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&api_code=07b92786-2838-4fbd-932c-49776ad571f3', function(data) {
        // Create the chart
        Highcharts.stockChart('container', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'BTC Price'
            },

            series: [{
                name: 'BTC',
                data: data,
                crossDomain: true,
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function() { alert("Success"); },
                error: function() { alert('Failed!'); },
                beforeSend: setHeader,
                async: false,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});
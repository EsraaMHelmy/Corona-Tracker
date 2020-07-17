var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Confirmed Cases',
            backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
            borderColor: window.chartColors.orange,
            fill: false,
            data: [{
                    x: new Date("2020-02-15"),
                    y: 1

                },


            ],
        }, {
            label: 'Recovered Cases',
            backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            fill: false,
            data: [{
                    x: new Date("2020-02-15"),
                    y: 0

                },

            ],
        }, {
            label: 'Deaths',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: false,
            data: [

                {
                    x: new Date("2020-02-15"),
                    y: 0

                },

            ],
        }]
    },
    options: {
        title: {
            text: ''
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    parser: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll HH:mm'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    fontSize: 13
                }

            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'COVID-19 CORONAVIRUS PANDEMIC'
                },
                ticks: {
                    fontSize: 13
                }
            }]
        },
    }
};

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);


};
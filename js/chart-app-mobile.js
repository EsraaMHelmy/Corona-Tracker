function BuildChart(labels, confirmed, recovered, deaths) {
    for (var i = 0; i < labels.length; i++) {
        labels[i] = labels[i].substr(0, labels[i].length - 14);
        // labels[i] = labels[i].replace('2020-', ' ');

    }

    var ctx = document.getElementById("canvas").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                    label: "Confirmed Cases",
                    data: confirmed,
                    borderColor: 'rgb(255, 153, 0)',
                    backgroundColor: 'rgb(255, 153, 0)',
                    fill: false
                }, {
                    label: "Recovered Cases",
                    data: recovered,
                    borderColor: 'rgb(51, 204, 255)',
                    backgroundColor: 'rgb(51, 204, 255)',
                    fill: false
                }, {
                    label: "Deaths",
                    data: deaths,
                    borderColor: 'rgb(245, 54, 54)',
                    backgroundColor: 'rgb(245, 54, 54)',
                    fill: false
                }

            ],
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            maintainAspectRatio: true,

            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: false,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: false,
                        labelString: 'Cover Traker'
                    }
                }]
            },
        }
    });

    return myChart;
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);

        // Map json labels  back to values array
        var labels = json.map(function (e) {
            return e.last_updated;
        });

        // Map json values back to values array
        var confirmed = json.map(function (e) {
            return (e.total_confirmed);
        });

        var recovered = json.map(function (e) {
            return (e.total_recovered);
        });


        var deaths = json.map(function (e) {
            return (e.total_deaths);
        });


        BuildChart(labels, confirmed, recovered, deaths);


    }
};

xhttp.open("GET", "https://api.coronatracker.com/v3/analytics/trend/country?countryCode=EG&startDate=2020-01-01&endDate=3030-12-30", false);
xhttp.send();
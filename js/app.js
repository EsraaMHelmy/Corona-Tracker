

      window.addEventListener('load', setup);

      async function setup() {
        const ctx = document.getElementById('canvas').getContext('2d');
        const globalTemps = await getData();
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: globalTemps.last_updated,
            datasets: [
              {
                label: 'Temperature in °C',
                data: globalTemps.total_confirmed,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1
              }
            ]
          },
          options: {}
        });
      }

      async function getData() {
        const response = await fetch('https://api.coronatracker.com/v3/analytics/trend/country?countryCode=EG&startDate=2020-01-01&endDate=3030-12-30');
        const data = await response.json();
        const {last_updated,total_confirmed }= data[0];


data.forEach(aaa);

function aaa(item, index) {
  console.log(item.last_updated, item.total_confirmed); 
}

     
      }

/*--------------- OnChange Select ------------------*/
var select = document.getElementById("selectCountry");
select.onchange = function () {

	$("#load-change").fadeIn("slow");

	$("#eg").remove();
	var selectedString = select.options[select.selectedIndex].value;

	const api_url = 'https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=' + selectedString;
	async function getCases() {
		const response = await fetch(api_url);
		const data = await response.json();
		const {
			totalConfirmed,
			totalRecovered,
			totalDeaths
		} = data[0];

		document.getElementById('Confirmed').textContent = totalConfirmed;
		document.getElementById('Recovered').textContent = totalRecovered;
		document.getElementById('Deaths').textContent = totalDeaths;

	}
	getCases();
	xhttp.open("GET", "https://api.coronatracker.com/v3/analytics/trend/country?countryCode=" + selectedString + "&startDate=2020-01-01&endDate=3030-12-30", false);
	xhttp.send();
	$("#load-change").fadeOut("slow");
}

/*--------------- Media Query JS File ------------------*/
function loadJS(url) {
	// adding the script tag to the head
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// fire the loading
	head.appendChild(script);
}


enquire.register("screen and (max-width: 599px)", {
	match: function () {
		// Load a mobile JS file
		loadJS('js/chart-app-mobile.js');
	}
});


enquire.register("screen and (min-width: 600px)", {
	match: function () {
		// Load a tablet JS file
		loadJS('js/chart-app.js');
		//console.log('tablet loaded');
	}
});

/*---------------INIT Select Plagin------------------*/
$('.select2').select2();

/*---------------preloader------------------*/
$(window).on('load', function () {
	$("#preloader").fadeOut("slow");
});


$(document).ready(function () {
	$("#Search").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#bodyTable tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});


const api_url = 'https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=EG';
async function getCases() {
	const response = await fetch(api_url);
	const data = await response.json();
	const {
		totalConfirmed,
		totalRecovered,
		totalDeaths
	} = data[0];

	document.getElementById('Confirmed').textContent = totalConfirmed;
	document.getElementById('Recovered').textContent = totalRecovered;
	document.getElementById('Deaths').textContent = totalDeaths;

}
getCases();

var apiContries_url = 'https://api.coronatracker.com/v3/stats/worldometer/country';
async function getCountry() {
	const response = await fetch(apiContries_url);
	const data = await response.json();
	const {
		country,
		totalConfirmed,
		totalRecovered,
		countryCode,
		totalDeaths
	} = data[0];


	data.forEach(myFunction);

	function myFunction(item, index) {
		// document.getElementById("bodyTable").innerHTML += "<tr><td>" + item.country + "</td>" + "<td>" + item.totalConfirmed + "</td>" + "<td>" + item.totalRecovered + "</td>" + "<td>" + item.totalDeaths + "</td></tr>";
		document.getElementById("selectCountry").innerHTML += '<option value="' + item.countryCode + '">' + item.country + '</option> ';
	}
}
getCountry();
/* Global Variables */
const base_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=afb6a48fa4cb909df070f0b738529901&units=metric'

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+1 + '.' + d.getDate() + '.' + d.getFullYear();

//  add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/*  call the Function by event listener */
function performAction() {
	const zipCode = document.getElementById('zip').value;
	const content = document.getElementById('feelings').value;

	bringData(base_URL, zipCode, apiKey)
		.then((data) => {
				console.log(data.main.temp);
				postData('/saveData', {
					temp: data.main.temp,
					date: newDate,
					userResponse: content
				});
			})
		.then(() => {
				getData("/getRecentWeatherData")
					.then((data) => {
							console.log(data + 'data');
							try {
								document.getElementById('temp').innerHTML = data.temperature;
								document.getElementById('date').innerHTML = data.date;
								document.getElementById('content').innerHTML = data.userResponse;
								console.log(data);
							} catch (error) {
								console.log("can't find data" + error);
							}
						});
			});
};

const bringData = async(base_URL, zipCode, apiKey) => {
	const res = await fetch(base_URL + zipCode + apiKey);
	try {
		// Transform response into JSON
		const data = await res.json()
		console.log(data);
		return data;
	} catch (error) {
		console.log( error,"Could not find Weather Data");
	}
}

// POST the data
const postData = async(url = '', data = {}) => {
	console.log(data);
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});

	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("error", error);
		//  handle the error
	}
}

// GET the data
const getData = async(url = '') => {

	const response = await fetch(url, {
		method: 'GET',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	try {
		const newData = await response.json();
		return newData;
	} catch (error) {
		console.log("bring Data Error", error);
	}
}
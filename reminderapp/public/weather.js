// // Dark Sky Forecaster Integration
// // Basic API Call URL:
// // https://api.darksky.net/forecast/c091c8ff8c07a5b4ffebf5621ce1310d/latitude,longitude




let latitude = '';
let longitude = '';
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


let thisWeekWeather;

function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        createWeeklyForecast()

    })
}


// createWeeklyForecast iterates from the current day through the week and constructs an array resprenting the weather forcast.
async function createWeeklyForecast() {
    let thisWeek = []
    apiURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c091c8ff8c07a5b4ffebf5621ce1310d/" + String(latitude) + ',' + String(longitude);
    const darkskyResponse = await fetch(apiURL);
    const forecast = await darkskyResponse.json();
    forecast['daily']['data'].forEach(function (day) {
        thisWeek.push(day)
    })
    thisWeekWeather = thisWeek
    console.log(thisWeekWeather)
    displayWeeklyForecast()

}


// displayWeeklyForecast creates and appends images representing the coming week's weather at the input ID.
function displayWeeklyForecast() {

    for (let day = 0; day < 7; day++) {
        let weatherIcon = thisWeekWeather[day]['icon'];
        document.getElementById(day).src = '../../images/' + weatherIcon + '.png';
    }
    for (let day = 2; day < 7; day ++) {
        
        let dayNumber = new Date(thisWeekWeather[day]['time'] * 1000)
        document.getElementById('day' + day).innerHTML = weekday[dayNumber.getDay()];
        }
    
}




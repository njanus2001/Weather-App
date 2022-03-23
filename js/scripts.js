function getWeather () {
    let city = document.getElementById('city').value;

    // API Key Removed
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=", function(data){
        console.log(data);

        document.forms['weather-form'].reset();
        document.getElementById('city-text').innerHTML = data.name;
        document.getElementById('weather-icon').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.getElementById('icon-div').style.visibility = 'visible';
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C";
    });
}

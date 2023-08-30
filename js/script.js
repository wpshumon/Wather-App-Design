let apiKey = "c193b2233d27ae2a07774c2b7d3c1238";
let searchInput = document.getElementById('input');
let searchBtn = document.getElementById('btn');
let weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city = "sylhet"){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=c193b2233d27ae2a07774c2b7d3c1238`;
    const response = await fetch(url + `&appid=${apiKey}`);
    let data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = './images/clouds.png'
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = './images/clear.png'
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = './images/drizzle.png'
    }
    else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = './images/mist.png'
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = './images/rain.png'
    }
}

checkWeather();

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
})

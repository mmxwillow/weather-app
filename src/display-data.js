const currentTemp = document.querySelector('.temp');
const description = document.querySelector('.description');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const location = document.querySelector('.location')
const img = document.querySelector('img');
const toggle = document.querySelector('input[type="checkbox"]')

let system = 'metric';
let temp = {};

const units = {
    metric: {
        temp: '°C',
        speed: 'km/h'
    },
    imperial: {
        temp: '°F',
        speed: 'mph'
    }
}

export default function displayData(data){
    system = (toggle.checked) ? 'metric' : 'imperial';
    temp = data;
    const tempUnits = `<sup>${units[system].temp}</sup>`;

    img.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    location.innerHTML = `${data.city}, ${data.country}`;
    currentTemp.innerHTML = data[system].temp + tempUnits;
    description.innerHTML = data.description;
    feelsLike.innerHTML = `feels like: ${  data[system].feels_like  }${tempUnits}`;
    humidity.innerHTML = `humidity: ${data.humidity}%`;
    wind.innerHTML = `wind: ${data[system].wind} ${units[system].speed}`;
}

toggle.addEventListener('change', () => {
    displayData(temp);
})
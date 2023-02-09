const currentTemp = document.querySelector('.temp');
const description = document.querySelector('.description');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

let system = 'metric';

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
    const tempUnits = `<sup>${units[system].temp}</sup>`;

    currentTemp.innerHTML = data[system].temp + tempUnits;
    description.innerHTML = data.description;
    feelsLike.innerHTML = data[system].feels_like + tempUnits;
    humidity.innerHTML = `${data.humidity}%`;
    wind.innerHTML = data[system].wind + units[system].speed;
}
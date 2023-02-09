import displayData from "./display-data";

function processData(data){
  const weather = {
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    metric: {
      temp: Math.round((data.main.temp - 32) * 5/9),
      feels_like: Math.round((data.main.feels_like - 32) * 5/9),
      wind: (data.wind.speed * 1.609).toFixed(2),
    },
    imperial: {
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      wind: data.wind.speed.toFixed(2),
    }
  }

  return weather;
}

export default async function fetchData(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9bd7a3b458df4663d1c3e2bcda89b19d&units=imperial`
    );

    if(response.status !== 200) throw new Error('City not found');
    const data = await response.json();
  
    displayData(processData(data));
  } catch (e) {
    console.error(e);
  }
}

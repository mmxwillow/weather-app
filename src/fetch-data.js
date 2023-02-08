function processData(data){
  const weather = {
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind_metric: data.wind.speed * 3.6,
    wind_imperial: data.wind.speed,
  }

  return weather;
}

export default async function fetchData(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9bd7a3b458df4663d1c3e2bcda89b19d&units=metric`
    );

    if(response.status !== 200) throw new Error('City not found');
    const data = await response.json();
  
    console.log(processData(data));
  } catch (e) {
    console.error(e);
  }
}

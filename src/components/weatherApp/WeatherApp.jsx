import './WeatherApp.css'
import WeatherIcon from './WeatherIcon'
import { useEffect, useState } from 'react'
import WeatherInfo from './WeatherInfo'





function WeatherApp() {

  const API_KEY = 'b52540510848c13426b0fa608febeb20';

  //useStates
  const [weatherData, setWeatherData] = useState({
    code: '',
    humidity: '',
    windSpeed: '',
    temp: '',
    location: ''
  })

  const [city, setCity] = useState('')




  const searchWeather = async () => {
    if (!city) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const roundTemp = Math.round(data.main.temp)

      setWeatherData({
        code: data.weather[0].icon,
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed} km/h`,
        temp: `${roundTemp} °C`,
        location: data.name
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }



  useEffect(() => {

    searchWeather();

  }, [city])



  return (
    <div className='container'>
    <header className='header'>
      <input
        type='text'
        className='inputCity'
        placeholder='Insert a city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
     
    </header>

    <div className='weather-img'>
      <WeatherIcon iconCode={weatherData.code} />
    </div>

    
    <WeatherInfo
        temp={weatherData.temp}
        location={weatherData.location}
        humidity={weatherData.humidity}
        windSpeed={weatherData.windSpeed}
      />



  </div>
  )
}

export default WeatherApp
import WeatherElement from "./WeatherElement"
import icon_humidity from '../assets/humidity.png'
import icon_wind from '../assets/wind.png'


function WeatherInfo({ temp, location, humidity, windSpeed}) {
    return (
        <section className='weather-inf'>
            <div id='weatherTemp'>{temp}</div>
            <div id='weatherLocation'>{location}</div>
            <div id='all-data'>
                <WeatherElement icon={icon_humidity} label="Humidity" value={humidity} />
                <WeatherElement icon={icon_wind} label="Wind speed" value={windSpeed} />
            </div>
        </section>

    )
}

export default WeatherInfo
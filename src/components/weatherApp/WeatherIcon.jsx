import icon_clear from '../assets/01d@2x.png'
import icon_cloud from '../assets/02d@2x.png'
import icon_drizzle from '../assets/09d@2x.png'
import icon_rain from '../assets/10d@2x.png'
import icon_snow from '../assets/13n@2x.png'
import icon_dark_cloud from '../assets/04n@2x.png'
import icon_cloudly from '../assets/03n@2x.png'
import icon_night from '../assets/01n@2x.png'
import icon_night2 from '../assets/02n@2x.png'
import icon_night_rain from '../assets/10n@2x.png'
import icon_mist from '../assets/50d@2x.png'
import default_icon from '../assets/default.png'



function WeatherIcon({ iconCode }) {

  const iconMapping = {
    "01d":  icon_clear ,
    "01n":  icon_night ,
    "02d":  icon_cloud ,
    "02n":  icon_night2 ,
    "03d":  icon_cloudly ,
    "03n":  icon_cloudly ,
    "04d":  icon_dark_cloud ,
    "04n":  icon_dark_cloud ,
    "09d":  icon_drizzle ,
    "09n":  icon_drizzle ,
    "10d":  icon_rain ,
    "10n":  icon_night_rain ,
    "13d":  icon_snow ,
    "13n":  icon_snow ,
    "50d": icon_mist,
    "50n": icon_mist
    
  }


  const iconPath = iconMapping[iconCode] || default_icon;

  return (
    <img src={iconPath} alt="Weather icon" />
  )
}

export default WeatherIcon
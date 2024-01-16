

function WeatherElement({ icon, label, value }) {
    return (
        <div className='element'>
            <img src={icon} alt='' />
            <div className='data'>
                <div className='data-text'>{label}</div>
                <div className='humidity'>{value}</div>
            </div>
        </div>
    )
}

export default WeatherElement;
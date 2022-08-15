

const WeatherResult = ({resultWeather}) => {
  return (

    <div className="weather-results">
      <p>actual weather in {resultWeather?.name}:</p>

      <ul>
        <li>Temperature:{resultWeather?.main.temp}</li>
        <li>Feels like:{resultWeather?.main.feels_like}</li>
        <li>Description:{resultWeather?.weather[0].description}</li>
        <li>Wind Speed:{resultWeather?.wind.speed}</li>

      </ul>
    </div>


  )
}

export default WeatherResult;
import axios from "axios";
import "dotenv/config";

//Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name)
const myKey = process.env.API_KEY;

async function getCity(location) {
  const urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${myKey}`;

  let response = null;
  try {
    response = await axios.get(urlLatLon);
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false;
  }
  // const lat = response.data[0].lat;
  // const lon = response.data[0].lon;
  // const geoPos = { lat: lat, lon: lon };
  const { lat, lon } = response.data[0];
  return { lat, lon };
}
// console.log(await getCity(process.argv[2]));


async function getWeather(city, units = "metric") {
  const cityObj = await getCity(city);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityObj.lat}&lon=${cityObj.lon}&units=${units}&appid=${myKey}`;

  let data = null;
  try {
    const response = await axios.get(weatherUrl);
    data = response.data;
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false
  }
  const temp = data.main.temp;
  const desc = data.weather[0].description;

  console.log("****************************************************");
  console.log(`* WEATHER NOW * `);
  console.log(`It is now ${temp} degrees/fahreneinheit in ${city}`);
  console.log(`the current weather conditions are: ${desc}`);

  // return false;
}
getWeather(process.argv[2], process.argv[3]);

async function getForecast(city, units = "metric") {
  const cityObj = await getCity(city);

  const foreCastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityObj.lat}&lon=${cityObj.lon}&units=${units}&appid=${myKey}`;

  let data = null;
  try {
    const response = await axios.get(foreCastUrl);
    data = response.data;
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
  }
  // console.log(data  const weather_desc = data.list[0].weather[0].description;
  const { name, sunrise, sunset } = data.city;
  const forecastTime = data.list[0].dt_txt;
  const feels_like = data.list[0].main.feels_like;
  const weather_desc = data.list[0].weather.description;
  const { temp_min, temp_max, pressure, humidity } = data.list[0].main;

  console.log("feels-like", feels_like);

  const milliSecSunRiseTime = sunrise * 1000;
  const dateObjectSunrise = new Date(milliSecSunRiseTime);
  const humanSunrise = dateObjectSunrise.toLocaleString();

  const milliSecSunSetTime = sunset * 1000;
  const dateObjectSunSet = new Date(milliSecSunSetTime);
  const humanSunset = dateObjectSunSet.toLocaleString();

  //   const forecastObj = (data.list.map(( interval) => {
  //     return {
  //       dt: (interval.dt).toLocaleString(),
  //       description: interval.weather[0].description,
  //       // num: interval.weather.length
  //     }
  //    }))
  // console.log(forecastObj)

  const forecastInterval = data.list.map((interval) => {
    const milliSecInterval = interval.dt * 1000;
    const dateObjectInterval = new Date(milliSecInterval);
    const humanInterval = dateObjectInterval.toLocaleString();
    return {
      dateObjectInterval: humanInterval,
      description: interval.weather[0].description,
      MinTemp: temp_min,
      MaxTem: temp_max,
      Pressure: pressure,
      Humidity: humidity,
      sunRise: humanSunrise,
      sunSet: humanSunset,
    }; 
  });
  // console.log("test forecastInterval", forecastInterval);

  const output = (forecastInterval) => {
    // console.log("Test", forecastInterval.dateObjectInterval)

    for (const [key, value] of Object.entries(forecastInterval)) {
      console.log(`
        ForecastInterval: ${value.dateObjectInterval}
        Description Weather: ${value.description}
        Min Temp: ${value.MinTemp}
        Max Temp: ${value.MaxTemp}
        Pressure: ${value.Pressure}
        Humidity: ${value.Humidity}
        Sun Rise: ${value.sunRise}
        Sun Set: ${value.sunSet}
        `);
    }
    // console.log(Object.entries(forecastInterval))
  };
  output(forecastInterval);

  console.log(
    "*****************************************************************"
  );
  console.log(`* WEATHER FORECAST NEXT 3 HOURS ${forecastTime} *`);
  console.log(
    `Feels like will be: ${feels_like} degree / fahrenheit in ${city}`
  );
  console.log(`the forecast weather conditions: ${weather_desc}`);
  console.log(`sunrise time: ${humanSunrise}, sunset time: ${humanSunset}`);
  console.log(
    "******************************************************************"
  );
}
getForecast(process.argv[2], process.argv[3]);

import Temperature from './Temperature';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState, useEffect } from 'react';

const WeatherResult = ({resultWeather, city}) => {

  console.log(new Date(resultWeather?.sys.sunset*1000))

  const [sunSet, setSunSet] = useState("")
  const [sunRise, setSunRise] = useState("")
  
  useEffect(() => {
    let sunRiseTime = new Date(resultWeather?.sys.sunrise*1000)
    let sunRiseHour = sunRiseTime.getHours()
    let sunRiseMinute= sunRiseTime.getMinutes()
    sunRiseTime = `${sunRiseHour} : ${sunRiseMinute}`
    setSunRise(sunRiseTime)
    let sunSetTime = new Date(resultWeather?.sys.sunset*1000)
  }, [])


  return (

    <Card sx={{ width: "400px"}} >
    <CardContent>

      
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {city}
      </Typography>

      <Box 
      display="flex"
      gap="20px"
      >
      <Box>
        <Temperature temp={resultWeather?.main.temp}></Temperature>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        feels-like: {resultWeather?.main.feels_like}°
    
        </Typography>
      </Box>

      <Box>        
        <Box sx={{ maxWidth: 50, maxHeight: 50}}>
          <CardMedia
          component="img"
          image={`http://openweathermap.org/img/wn/${resultWeather?.weather[0].icon}@2x.png`}
          alt="weather icon"
          />
        </Box>
        {resultWeather?.weather[0].description}
      </Box>

      <Box>
          <NavigationIcon style={{transform: `rotate(${resultWeather?.wind.deg}deg)`}}></NavigationIcon>
          <Typography variant="body2">
          {resultWeather?.wind.speed} kmh 
          </Typography>
        </Box>
    </Box>

  <Box
    display="flex"
    gap="20px"
    justifyContent="space-between"
    
  >
      <Box>
        <Typography color="text.secondary">
        {resultWeather?.main.humidity}%
          </Typography>
          <Typography  color="text.secondary">
            Rel.hum.
        </Typography>
      </Box>

      <Box>
        <Typography color="text.secondary">
        {resultWeather?.main.pressure}hPa
          </Typography>
          <Typography  color="text.secondary">
            Pressure
        </Typography>
      </Box>
    </Box>

    <Box>

   

    <Typography  color="text.secondary">
    {sunRise}            
    </Typography>

        <Typography  color="text.secondary">
            sunRise
        </Typography>







    </Box>



    </CardContent>


  </Card>

  )
}

export default WeatherResult;
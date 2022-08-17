import WeatherCard from './WeatherCard';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import NavigationIcon from '@mui/icons-material/Navigation';

const WeatherResult = ({resultWeather, city}) => {
  return (

    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {city}
      </Typography>
      <Typography variant="h3" component="div">
      Temp: {resultWeather?.main.temp}°
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      feels-like: {resultWeather?.main.feels_like}°
      </Typography>
      <Typography variant="body2">
      {resultWeather?.wind.speed} kmh 
        </Typography>
        <NavigationIcon ></NavigationIcon>
      {resultWeather?.wind.deg}

      <Box sx={{ maxWidth: 50, maxHeight: 50}}>
        <CardMedia
        component="img"
        image={`http://openweathermap.org/img/wn/${resultWeather?.weather[0].icon}@2x.png`}
        alt="weather icon"
        />
      </Box>
        <br />
        {'"a benevolent smile"'}
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

  )
}

export default WeatherResult;
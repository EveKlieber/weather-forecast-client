import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from "react";
import { inputBaseClasses } from "@mui/material";
import axios from 'axios'
import { getWeather } from "../../helpers/helpers";
import WeatherResult from "../components/WeatherResult";

export const GetWeather = () => {
  const [input, setInput] = useState("");
  const [showWeather, setShowWeather] = useState(false)
  const [resultWeather, setResultWeather] = useState({});
  // state fpr error
  useEffect(() => {   
    Object.keys(resultWeather).length > 0 && setShowWeather(true) // keys ist eine function macht array // && nur wenn zweite wahr ist
    
   }, [resultWeather]);  // leerer Array dadurch nur einmal beim start ausgeführt.

  const handleClick = async (e) => {
    let currentWeatherResult = await getWeather(input);
    if (currentWeatherResult.success) setResultWeather(currentWeatherResult) 
    setInput("")
  }

  return (
    <>
    <div className="page_weather">
      <h2>get current weather</h2>

      <TextField
        id="outlined-basic"
        label="enter location"
        variant="outlined"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleClick}>
          send
        </Button>
      </Stack>
   
    </div>

        {Object.keys(resultWeather).length > 0 && <WeatherResult city = {input} resultWeather = {resultWeather.result} />}
      </>


  );
};

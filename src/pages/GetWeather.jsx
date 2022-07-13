import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from "react";
import { getWeather } from "../../helpers/helpers";

export const GetWeather = () => {
  const [input, setInput] = useState("");

  const handleClick = e => {
    getWeather(input);
  };

  return (
    <div className="page_weather">
      <h2>weather</h2>

      <TextField
        id="outlined-basic"
        label="enter location"
        variant="outlined"
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
  );
};

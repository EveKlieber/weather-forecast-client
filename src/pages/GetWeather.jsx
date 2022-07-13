import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { getWeather } from "../../helpers/helpers";

export const GetWeather = () => {
  const [input, setInput] = useState("");

	const handleClick = (e) => {
		getWeather(input);
	}

  return (
    <div className="page_weather">
      <h2>weather</h2>

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={e => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
      />

			<button
				onClick={handleClick}
				>send
				</button>
    </div>
  );
};

import { NavLink, Routes, Route, Navigate } from 'react-router-dom';


export const MountainPeaks = () => {
	return (
		<div className="page_welcome">
			<h2>Mountain peaks closest to you</h2>
			

			<NavLink to="/peaks">Mountain Peaks</NavLink> |{' '}
			<NavLink to="/getweather">Get your Weather</NavLink> |{' '}
			<NavLink to="/getalert">Get your Weather Alerts</NavLink>



		</div>
	)
}


// https://www.mountain-forecast.com/peaks/Wendelstein/forecasts/1838

// 2 forecast elevations: Base 100m peak 1838m.
// hello@meteo365.com
// + 44 7803 293547


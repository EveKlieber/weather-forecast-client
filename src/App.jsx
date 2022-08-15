import './App.scss';
import { MountainPeaks } from './pages/MountainPeaks';
import { GetWeather } from './pages/GetWeather';
import { GetAlert } from './pages/GetAlert';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';


function App() {
	return (
		<div className="App">
			<h1>Mountain weather occasion warnings </h1>
			<hr />
			<NavLink to="/peaks">Mountain Peaks</NavLink> |{' '}
			<NavLink to="/getweather">Get your mountain weather</NavLink> |{' '}
			<NavLink to="/getalert">Get your occasion alerts</NavLink>
			<hr />
			<Routes>
				<Route path="/peaks" element={<MountainPeaks />} />
				<Route path="/getweather" element={<GetWeather />} />
				<Route path="/getalert" element={<GetAlert />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;

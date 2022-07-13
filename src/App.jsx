import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { GetWeather } from './pages/GetWeather';
import { GetAlert } from './pages/GetAlert';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';


function App() {
	return (
		<div className="App">
			<h1>Wetter API</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/getweather">Get your Weather</NavLink> |{' '}
			<NavLink to="/getalert">Get your Weather Alerts</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/getweather" element={<GetWeather />} />
				<Route path="/getalert" element={<GetAlert />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;

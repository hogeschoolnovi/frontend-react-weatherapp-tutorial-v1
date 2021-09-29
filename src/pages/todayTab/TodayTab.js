import React, { useEffect } from 'react';
import axios from 'axios';
import './TodayTab.css';

const apiKey = 'plaats jouw unieke API key hier';

function TodayTab({ coordinates }) {
	useEffect(() => {
		async function fetchData() {
			try {
			    const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,daily&appid=${apiKey}`);
					console.log(result);
			} catch(e) {
			    console.error(e);
			}
		}

		if (coordinates) {
			fetchData();
		}

	}, [coordinates]);

	return(
		<div className="tab-wrapper">
			<div className="chart">
				Hier komt de chart!
			</div>
			<div className="legend">
				<span>08:00 uur</span>
				<span>12:00 uur</span>
				<span>16:00 uur</span>
			</div>
		</div>
  );
};

export default TodayTab;

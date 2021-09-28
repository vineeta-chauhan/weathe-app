import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { notification } from "antd";

import Dropdown from './Dropdown';
import styles from './weather.module.css';


const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [selectedState, setSelectedState] = useState('Karnataka');

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      
      params: { q: selectedState },
      headers: {
        'x-rapidapi-key': 'af9f204779mshe604b6c4450a031p15dde8jsn484730c962ca'
      }
      
    };

    axios.request(options).then(function (response) {
      console.log(response.data,"**********")
      const weatherApiData = response.data?.current;
      if (typeof weatherApiData === 'object') {
        setWeatherData(weatherApiData);
      } else {
        notification.error({
          description: 'No Data found',
        });
      }
    }).catch(function (error) {
      console.error(error);
      notification.error({
        description: error?.error?.message || 'Error',
      });
    });
  }, [selectedState])

  const handleOnSelect = (state) => setSelectedState(state);

  return (
    <>
      <div className={styles.waetherContainer}>
        <div className={styles.container}>
          <div className={styles.selectDropdownContainer}>
          <label className={styles.stateLabel}>Select State</label>
            <Dropdown
              handleOnSelect={handleOnSelect}
              position='top'
            />
          </div>
          <div className={styles.subContainer}>
            <div className={styles.vertcle1}>
              <div className={styles.label}>Temprature</div>
              {weatherData.temp_c} <span>&#8451;</span>
            </div>
            <div className={styles.vertcle2}>
              <div className={styles.label}>Humidity</div>
              {weatherData.humidity}
            </div >
            <div className={styles.vertcle3}>
              <div className={styles.label}>Pressure</div>
              {weatherData.pressure_mb}
            </div >
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather;
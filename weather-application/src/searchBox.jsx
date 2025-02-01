import { useState } from 'react';
import './searchbox.css';
import { DateTime } from 'luxon';

import SearchIcon from '@mui/icons-material/Search';

export default function Searchbox({updateInfo}) {
  let [City, setCity] = useState("");

  
  const API_KEY="K84z2C6h24RHwPzQJEsKAa7dPxQq1BZE";
  const API_URL= 'https://api.tomorrow.io/v4/weather/forecast';
  
  const apiKey = "R1GRHOUI9RTH"; 
  
 


  const getWeatherInfo=async()=>{
    const response=await fetch(`${API_URL}?location=${encodeURIComponent(City)}&apikey=${API_KEY}`);
    const jsonResponse=await response.json();
    let lat=jsonResponse.location.lat;
    let lon=jsonResponse.location.lon;
    const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    const timeData=await fetch(url);
    const jsonData=await timeData.json();
     
     const now = new Date().toISOString(); 

     const currentWeather = jsonResponse.timelines.hourly.find((hour) => {
     const hourTime = new Date(hour.time).getHours();
     const nowTime = new Date(now).getHours();
     return hourTime === nowTime; 
      });

      const [date, time] = jsonData.formatted.split(" ");
     
     

function convertUTCtoLocal(utcTime, timezone) {
        const localTime = DateTime.fromISO(utcTime, { zone: "UTC" }).setZone(timezone);
        return localTime.toLocaleString(DateTime.TIME_SIMPLE);

} 
     
     
     let result={
       location:jsonResponse.location.name.split(",")[0].trim(),
       country:jsonResponse.location.name.split(",").pop().trim(),
       date:date,
       currtime:time,
       currentTemp:currentWeather.values.temperature,
       time1:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[2].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[2].values.temperature
       },
       time2:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[3].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[3].values.temperature
       },
       time3:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[6].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[6].values.temperature
       },
       time4:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[9].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[9].values.temperature
       },
       time5:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[12].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[12].values.temperature
       },
       time6:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[15].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[15].values.temperature
       },
       time7:{
        week:convertUTCtoLocal(jsonResponse.timelines.hourly[18].time,jsonData.zoneName),
        temprature:jsonResponse.timelines.hourly[18].values.temperature
       },
      

       precipitation:currentWeather.values.precipitationProbability,
       humidity:currentWeather.values.humidity,
       wind:currentWeather.values.windSpeed,
       pressure:currentWeather.values.pressureSurfaceLevel
       

     }
    
     console.log(currentWeather);
     console.log(result);
     console.log(jsonResponse);
     console.log(jsonData);

     return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };
 

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(City); 
    setCity("");
    let newinfo=await getWeatherInfo();
    updateInfo(newinfo);
    
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="input">
           <input type="text" name='city' value={City} onChange={handleChange} placeholder='Enter City name' />
          </div>
          <div className="button">
           <SearchIcon/>
           Search
          </div>
        </div>
      </form>
    </div>
  );
}

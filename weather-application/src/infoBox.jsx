import cloudyImage from './assets/cloudy.png';
import rainyImage from './assets/rainy-day.png';
import sunnyImage from './assets/sun.png';
import coldImage from './assets/cold.png';
import Clouds from './assets/clouds.jpg';
import SunnyBack from './assets/sunback.jpg';
import RainyBack from './assets/rainyBack.jpg';
import coldBack from './assets/coldback.jpg';
import nightImage from './assets/nightImage.jpg';
import Clear from './assets/Clear.jpg';
import nightCloud from './assets/nightcloud.jpg';
import sunset from './assets/sunset.jpg';
import nightrain from './assets/nightrain.jpg';

import { useState } from 'react';
import './infoBox.css'
export default function InfoBox({info}){
   
       const sunnyimage_URL="https://unsplash.com/photos/the-sun-shines-brightly-over-a-valley-with-trees-in-the-foreground-tG62Zpzm1lU";
       const cloudyimage_URL="https://unsplash.com/photos/a-view-of-a-mountain-range-with-clouds-in-the-sky-qd9SE8we9Yo";
        const getWeatherImage = () => {
          const currentHour = parseInt(info.currtime.split(":")[0], 10);
          if (currentHour > 18 && info.humidity<60&&info.precipitation===0) {
            return Clear; 
          }

          if (info.humidity > 80 && info.precipitation > 50) {
            return rainyImage;
          } else if (info.currentTemp < 10) {
            return coldImage;
          } else if (info.currentTemp > 25) {
            return sunnyImage;
          } else if (info.humidity > 60 && info.currentTemp >= 10 && info.currentTemp <= 25) {
            return cloudyImage;
          }
          
          return sunnyImage;
        };
        const getWeatherRemark = () => {
          const currentHour = parseInt(info.currtime.split(":")[0], 10);
          if (currentHour > 18 && info.humidity<70&&info.precipitation===0) {
            return "Clear"; 
          }
          if (currentHour>17&&currentHour < 19 &&info.precipitation<50&&info.humdity<70) {
            return "Dusky"; 
          }
            if (info.humidity > 80 && info.precipitation > 50) {
              return "Rainy";
            } else if (info.currentTemp < 10) {
              return "Cold";
            } else if (info.currentTemp > 25) {
              return "Sunny";
            } else if (info.humidity > 60 && info.currentTemp >= 10 && info.currentTemp <= 25) {
              return "Cloudy";
            }
            return "Sunny";
          };
          const getWeatherBack = () => {
            const currentHour = parseInt(info.currtime.split(":")[0], 10);
            if (currentHour > 19||currentHour<4||currentHour===0 && info.humidity<70&&info.precipitation===0) {
              return nightImage; 
            }
            
            if (currentHour>17&&currentHour < 19 &&info.precipitation<50&&info.humdity<70) {
              return sunset; 
            }
            if (currentHour>19 &&info.precipitation>50&&info.humdity>80) {
              return nightrain; 
            }
            if (currentHour>19 &&info.humidity > 70&&info.currentTemp<25&&info.pressure<1000) {
              return nightCloud; 
            }
            
            if (info.humidity > 80 && info.precipitation > 50) {
              return RainyBack;
            } else if (info.currentTemp < 10) {
              return coldBack;
            } else if (info.currentTemp > 25) {
              return SunnyBack;
            } else if (info.humidity > 70 && info.currentTemp >= 10 && info.currentTemp <= 25&&info.pressure<1000) {
              return Clouds;
            }
            return SunnyBack;
          };
         console.log(getWeatherBack());



    return(
      <div className="infobox" >
        <div className="locationInfo" style={{backgroundImage:`url(${getWeatherBack()})`}}>
            <div className="location">
                <div className="locationName">
                    <h1>{info.location}</h1>
                    <p>{info.country}</p>
                </div>
            </div>
            <div className="timeAndtemp">
                <div className="time">
                    <p>{info.currtime}</p>
                    <h3>{info.date}</h3>
                </div>
                <div className="temp">
                    <p>{info.currentTemp}&#8451;</p>
                </div>
            </div>
        </div>
        <div className="weatherInfo">
            <div className="remark">
                <div className="image">
                <img src={getWeatherImage()} alt="" />
  
                </div>
              <h1>{getWeatherRemark()}</h1>

    
            </div>
            <hr />

            <div className="actualInfo">
                <ul>
                    <li>Precipitation: {info.precipitation}%</li>
                    <li>Humidity: {info.humidity}%</li>
                    <li>wind: {info.wind} km/h</li>
                    <li>pressure: {info.pressure}</li>
                </ul>
            </div>
        </div>
        <hr id='bottomLine'/>
        <div className="timingInfo">
            <div className="timing">
                <p>{info.time1.week}</p>
                <p>{info.time1.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time2.week}</p>
                <p>{info.time2.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time3.week}</p>
                <p>{info.time3.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time4.week}</p>
                <p>{info.time4.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time5.week}</p>
                <p>{info.time5.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time6.week}</p>
                <p>{info.time6.temprature}&#8451;</p>
            </div>
            <div className="timing">
                <p>{info.time7.week}</p>
                <p>{info.time7.temprature}&#8451;</p>
            </div>
            
        </div>
      </div>
    );
}
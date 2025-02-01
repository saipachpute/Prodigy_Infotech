
import Searchbox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function Weatherapp(){
 const [weatherInfo,setWeatherInfo]=useState({
  location:"Delhi",
  country:"INDIA",
  date:"15-01-2025",
  currtime:"12:32",
  currentTemp:10,
  time1:{
    week:"WED",
    temprature:19
  },
  time2:{
    week:"FRI",
    temprature:19
  },
  time3:{
    week:"SUN",
    temprature:19
  },
  time4:{
    week:"MON",
    temprature:19
  },
  time5:{
    week:"TUE",
    temprature:19
  },
  time6:{
    week:"WED",
    temprature:19
  },
  time7:{
    week:"THU",
    temprature:19
  },
  precipitation:0,
  humidity:20,
  pressure:12,
  wind:20

 });
  
let updateInfo=(newinfo)=>{
  setWeatherInfo(newinfo);
}


    return (
       <>
         <Searchbox updateInfo={updateInfo} />
         <br />
         
         <InfoBox info={weatherInfo}/>
         </>
    );
}
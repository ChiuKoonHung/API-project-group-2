import React, { useEffect, useState } from "react";
//import "./ly_forecast.css";
import API from "./API_forecast";
document.title = "Forecast App";

const ShowForecast = ({}) => {
    
    const dateToday = new Date().toLocaleDateString('en-CA');
    console.log(dateToday);
    const timeNow = new Date().toLocaleTimeString('en-GB');
    console.log(timeNow);

    const dateTime = (dateToday+"T"+timeNow);
    console.log(dateTime);
 
    const [forecast2h, setForecast2h] = useState([]);
    const [location2h, setLocation2h] = useState([]);
    //const [forecast24h, setForecast24h] = useState("");
    //const [forecast4day, setForecast4day] = useState("");

    useEffect(()=>{
        
        const getWeatherForecast = async (e) =>{

    
        try {
            //const forecast2h = await API.get(`/2-hour-weather-forecast?date=${dateTime}`);
            const location2h = await API.get(`/2-hour-weather-forecast?date_time=${decodeURI(dateTime)}`);
            const forecast2h = await API.get(`/2-hour-weather-forecast?date_time=${decodeURI(dateTime)}`);
            //const forecast24h = await API.get(`/24-hour-weather-forecast?date=${dateToday}`); 
            const forecast4day = await API.get(`/4-day-weather-forecast?date=${dateToday}`);  
            //let selectLocation = location.value;
            //Syntax setState (initialState.)
            //setForecast2h(forecast2h.status);
            //setForecast24h(forecast24h.status);
            //setForecast4day(forecast4day.status);
            //setLocation2h(location2h.data.area_metadata[0]["name"]);
            setLocation2h(forecast2h.data.items[0]["forecasts"][0]["area"]);
            setForecast2h(forecast2h.data.items[0]["forecasts"][0]["forecast"]);
            //setForecast24h(forecast24h.data.items.timestamp);
            // setForecast24h(forecast24h.data.api_info.status);
            //setForecast24h(forecast24h.data.area_metadata.name);
            // setForecast4day(forecast4day.data.items.timestamp); 
        } catch(err){
            console.log(err);
        }    
    }

    getWeatherForecast();
    
    },[])

    return (
        <>
        <select id="location">
        <option disabled selected>Select Location</option>    
        <option value="0">Ang Mo Kio</option>
        <option value="1">Bedok</option>
        <option value="2">Bishan</option>
        <option value="3">Boon Lay</option>
        <option value="4">Bukit Batok</option>
        <option value="9">Changi</option>
        <option value="14">Hougang</option>
        <option value="46">Yishun</option>
      </select>

        <p>The time now is: {timeNow}</p>
        <p>Weather forecast for next 2 hours: {forecast2h}</p>
        <p>at {location2h}</p>
        {/* <p>at {forecast2h}</p> */}
        {/* <p>{forecast24h}</p>
        <p>{forecast4day}</p> */}
        </> 
    )
}

export default ShowForecast;
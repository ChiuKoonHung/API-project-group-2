import React, { useEffect, useState } from "react";
import "./ly_forecast.css";
import API from "../../API";
document.title = "Forecast App";

const ShowForecast = ({}) => {
    
    const dateToday = new Date().toLocaleDateString('en-CA');
    const timeNow = new Date().toLocaleTimeString('en-GB');
    const dateTime = (dateToday+"T"+timeNow);
 
    const [forecast2h, setForecast2h] = useState([]);
    const [location2h, setLocation2h] = useState([]);

    const [forecast24h, setForecast24h] = useState([]);
    const [north, setNorth] = useState([]);
    const [south, setSouth] = useState([]);
    const [east, setEast] = useState([]);
    const [west, setWest] = useState([]);
    const [central, setCentral] = useState([]);

    const [forecast1st, setForecast1st] = useState([]);
    const [date1st, setDate1st] = useState([]);

    const [forecast2nd, setForecast2nd] = useState([]);
    const [date2nd, setDate2nd] = useState([]);

    const [forecast3rd, setForecast3rd] = useState([]);
    const [date3rd, setDate3rd] = useState([]);

    const [forecast4th, setForecast4th] = useState([]);
    const [date4th, setDate4th] = useState([]);

    useEffect(()=>{
        
        const getWeatherForecast = async (e) =>{

    
        try {

            const forecast2h = await API.get(`/2-hour-weather-forecast?date_time=${dateTime}`);
            const forecast24h = await API.get(`/24-hour-weather-forecast?date=${dateToday}`); 
            const forecast4day = await API.get(`/4-day-weather-forecast?date=${dateToday}`);  
            
            setLocation2h(forecast2h.data.items[0]["forecasts"][0]["area"]);
            setForecast2h(forecast2h.data.items[0]["forecasts"][0]["forecast"]);

            setForecast24h(forecast24h.data.items[0]["general"]["forecast"]);
            setNorth(forecast24h.data.items[0]["periods"][0]["regions"]["north"]);
            setSouth(forecast24h.data.items[0]["periods"][0]["regions"]["south"]);
            setEast(forecast24h.data.items[0]["periods"][0]["regions"]["east"]);
            setWest(forecast24h.data.items[0]["periods"][0]["regions"]["west"]);
            setCentral(forecast24h.data.items[0]["periods"][0]["regions"]["central"]);

            setForecast1st(forecast4day.data.items[0]["forecasts"][0]["forecast"]);
            setDate1st(forecast4day.data.items[0]["forecasts"][0]["date"]);

            setForecast2nd(forecast4day.data.items[0]["forecasts"][1]["forecast"]);
            setDate2nd(forecast4day.data.items[0]["forecasts"][1]["date"]);

            setForecast3rd(forecast4day.data.items[0]["forecasts"][2]["forecast"]);
            setDate3rd(forecast4day.data.items[0]["forecasts"][2]["date"]);
            
            setForecast4th(forecast4day.data.items[0]["forecasts"][3]["forecast"]);
            setDate4th(forecast4day.data.items[0]["forecasts"][3]["date"]);

        } catch(err){
            console.log(err);
        }    
    }

    getWeatherForecast();
    
    },[])

    return (
    <>    
    <div class = "main-container">
        <div class>
            <p>Today's date is {dateToday}. The time now is {timeNow}</p>
            <h3>24 hour forecast (islandwide): {forecast24h}</h3>
        </div>
        <div class = "section-divider"></div> 
        <h3>24 hour forecast (by region)</h3>

        <div class="forecast-container">
        <div class="item"><b>North</b><br/>{north}</div>
        <div class="item"><b>South</b><br/>{south}</div>
        <div class="item"><b>East</b><br/>{east}</div>
        </div> 

        <div class="forecast-container">
        <div class="item"><b>West</b><br/>{west}</div>
        <div class="item"><b>Central</b><br/>{central}</div>
        </div> 

        <div class = "section-divider"></div>

        <h3>2 hour forecast (by location): {forecast2h}</h3>

        <div class = "forecast-container">
            <div class="item">Location: {location2h}</div>    
        </div>
        <div class = "list">
            <select id = "location">
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
        </div>
        <br/>
        <div class = "section-divider"></div>
                
        <h3>4 day forecast (islandwide)</h3>  

        <div class = "list">
        <p>{date1st}: {forecast1st}</p>
        <p>{date2nd}: {forecast2nd}</p>
        <p>{date3rd}: {forecast3rd}</p>
        <p>{date4th}: {forecast4th}</p>
        </div>

    </div> 
    </>
    )
}

export default ShowForecast;

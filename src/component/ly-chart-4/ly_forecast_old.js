// import React, { useEffect, useState } from "react";
// import "./ly_forecast.css";
// import API from "./API_forecast";
// document.title = "Forecast App";

// const ShowForecast = ({}) => {
    
//     const dateToday = new Date().toLocaleDateString('en-CA');
 
//     console.log(dateToday);
//     const timeNow = new Date().toLocaleTimeString('en-GB');
//     console.log(timeNow);

//     const dateTime = (dateToday+"T"+timeNow);
//     console.log(dateTime);
 
//     const [forecast2h, setForecast2h] = useState([]);
//     const [location2h, setLocation2h] = useState([]);

//     const [forecast24h, setForecast24h] = useState([]);
//     const [north, setNorth] = useState([]);
//     const [south, setSouth] = useState([]);
//     const [east, setEast] = useState([]);
//     const [west, setWest] = useState([]);
//     const [central, setCentral] = useState([]);

//     const [forecast1st, setForecast1st] = useState([]);
//     const [date1st, setDate1st] = useState([]);

//     const [forecast2nd, setForecast2nd] = useState([]);
//     const [date2nd, setDate2nd] = useState([]);

//     const [forecast3rd, setForecast3rd] = useState([]);
//     const [date3rd, setDate3rd] = useState([]);

//     const [forecast4th, setForecast4th] = useState([]);
//     const [date4th, setDate4th] = useState([]);

//     useEffect(()=>{
        
//         const getWeatherForecast = async (e) =>{

    
//         try {

//             const forecast2h = await API.get(`/2-hour-weather-forecast?date_time=${dateTime}`);
//             const forecast24h = await API.get(`/24-hour-weather-forecast?date=${dateToday}`); 
//             const forecast4day = await API.get(`/4-day-weather-forecast?date=${dateToday}`);  
            
//             //Syntax setState (initialState.status)
//             setForecast2h(forecast2h.status);
//             setForecast24h(forecast24h.status);
//             setForecast1st(forecast4day.status);
            
//             //setLocation2h(location2h.data.area_metadata[0]["name"]);
//             setLocation2h(forecast2h.data.items[0]["forecasts"][0]["area"]);
//             setForecast2h(forecast2h.data.items[0]["forecasts"][0]["forecast"]);

//             setForecast24h(forecast24h.data.items[0]["general"]["forecast"]);
//             setNorth(forecast24h.data.items[0]["periods"][0]["regions"]["north"]);
//             setSouth(forecast24h.data.items[0]["periods"][0]["regions"]["south"]);
//             setEast(forecast24h.data.items[0]["periods"][0]["regions"]["east"]);
//             setWest(forecast24h.data.items[0]["periods"][0]["regions"]["west"]);
//             setCentral(forecast24h.data.items[0]["periods"][0]["regions"]["central"]);
//             // setForecast24h(forecast24h.data.api_info.status);

//             setForecast1st(forecast4day.data.items[0]["forecasts"][0]["forecast"]);
//             setDate1st(forecast4day.data.items[0]["forecasts"][0]["date"]);

//             setForecast2nd(forecast4day.data.items[0]["forecasts"][1]["forecast"]);
//             setDate2nd(forecast4day.data.items[0]["forecasts"][1]["date"]);

//             setForecast3rd(forecast4day.data.items[0]["forecasts"][2]["forecast"]);
//             setDate3rd(forecast4day.data.items[0]["forecasts"][2]["date"]);
            
//             setForecast4th(forecast4day.data.items[0]["forecasts"][3]["forecast"]);
//             setDate4th(forecast4day.data.items[0]["forecasts"][3]["date"]);

//         } catch(err){
//             console.log(err);
//         }    
//     }

//     getWeatherForecast();
    
//     },[])

//     return (
//         <>
//         <select id="location">
//         <option disabled selected>Select Location</option>    
//         <option value="0">Ang Mo Kio</option>
//         <option value="1">Bedok</option>
//         <option value="2">Bishan</option>
//         <option value="3">Boon Lay</option>
//         <option value="4">Bukit Batok</option>
//         <option value="9">Changi</option>
//         <option value="14">Hougang</option>
//         <option value="46">Yishun</option>
//       </select>

//         <p>Time now: {timeNow}</p>
//         <p>Weather Forecast (next 2hrs): {forecast2h}</p>
//         <p>Location: {location2h}</p>

//         <b>Weather Forecast (5 day)</b>
//         <p>Today, {dateToday}: {forecast24h}</p>
//         <p>North: {north}</p>
//         <p>South: {south}</p>
//         <p>East: {east}</p>
//         <p>West: {west}</p>
//         <p>Central: {central}</p>

//         <p>{date1st}: {forecast1st}</p>
//         <p>{date2nd}: {forecast2nd}</p>
//         <p>{date3rd}: {forecast3rd}</p>
//         <p>{date4th}: {forecast4th}</p>
//         </> 
//     )
// }

// export default ShowForecast;
// import React, { useEffect, useState } from "react";
// import ForecastDisplay from "./ly_forecast";
// import API from "./API_forecast";

// export default function ForecastData() {
    
//     //query fields
//     const dateToday = new Date().toLocaleDateString('en-CA');
//     const timeNow = new Date().toLocaleTimeString('en-GB');
//     const dateTime = (dateToday+"T"+timeNow);
 
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
//         <div className="App">
//             <ForecastDisplay />
//         </div>
//     );

// }
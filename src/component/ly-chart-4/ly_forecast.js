import React from "react";
//import "./ly_forecast.css";
import API from "./API_forecast";
document.title = "Forecast App";

const ShowForecast = ({}) => (
    
    getWeatherForecast = (async e =>{
    
        //let query = "2021-11-10";
        const forecast2h = await API.get(/2-hour-weather-forecast?date=2021-10-11);
        const forecast24h = await API.get(/24-hour-weather-forecast?date=2021-10-11); 
        const forecast4day = await API.get(/4-day-weather-forecast?date=2021-10-11); 
        //const designs = await API.get(`/designs?lodgement_date=${query}`);
        //const trademark = await API.get(`/trademarks?lodgement_date=${query}`);
         
    
        console.log(forecast2h.status);
        console.log(forecast24h.status);
        console.log(forecast4day.status);
    
    
        // console.log(designs.data.count);
        // console.log(designs.data.items[0]["journals"]); //finding index 0 of "journals"
        // console.log(trademark.data.count);
    
    })();

)

export default ShowForecast;

// const ShowForecast = (async()=>{

// const refresh = () => {
//     window.location.reload();
// };
    
//     //let query = "2021-11-10";
//     const forecast2h = await API.get(2-hour-weather-forecast?date=2021-10-11);
//     const forecast24h = await API.get(/24-hour-weather-forecast?date=2021-10-11); 
//     const forecast4day = await API.get(4-day-weather-forecast?date=2021-10-11); 
//     //const designs = await API.get(`/designs?lodgement_date=${query}`);
//     //const trademark = await API.get(`/trademarks?lodgement_date=${query}`);
     

//     console.log(forecast2h.status);
//     console.log(forecast24h.status);
//     console.log(forecast4day.status);


//     // console.log(designs.data.count);
//     // console.log(designs.data.items[0]["journals"]); //finding index 0 of "journals"
//     // console.log(trademark.data.count);

// })();


// export default ShowForecast;

// (async()=>{
    
//     //let query = "2021-11-10";
//     const forecast2h = await API.get(2-hour-weather-forecast?date=2021-10-11);
//     const forecast24h = await API.get(/24-hour-weather-forecast?date=2021-10-11); 
//     const forecast4day = await API.get(4-day-weather-forecast?date=2021-10-11); 
//     //const designs = await API.get(`/designs?lodgement_date=${query}`);
//     //const trademark = await API.get(`/trademarks?lodgement_date=${query}`);
     

//     console.log(forecast2h.status);
//     console.log(forecast24h.status);
//     console.log(forecast4day.status);


//     // console.log(designs.data.count);
//     // console.log(designs.data.items[0]["journals"]); //finding index 0 of "journals"
//     // console.log(trademark.data.count);

// })();
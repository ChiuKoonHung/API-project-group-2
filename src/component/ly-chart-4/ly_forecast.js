import React, { useEffect, useState } from "react";
import "./ly_forecast.css";
import API from "../../API";
document.title = "Forecast App";

/*
    This is your pure component.

    In this component, it is possible to break into even smaller components. FOr example, in your widget there are 4 parts
    1. 24 hour forecast
    2. 24 hour forecast by region
    3. 2 hour forecast by location
    4. 4 day forecast islandwide

    This <ShowForecast> component could have broken into 4 smaller components, then it will be rendered in chart_4_view.js 

    For now, I am breaking this up as first layer for you to have a sense of what is pure component. This component is now pure component, but not so reusable until you break it into 4.
*/
const ShowForecast = ({massiveProps}) => {
    const {dateToday, timeNow, dateTime, forecast2h, location2h, forecast24h, north, south, east, west, central, forecast1st, date1st, forecast2nd, date2nd, forecast3rd, date3rd, forecast4th, date4th, setAreaIndex} = massiveProps;    
    
    return (    
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
            <select onChange = {(e) =>{
                let areaIndex = e.target.value;
                setAreaIndex(areaIndex);  
            }}>
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
            {/* uncomment below to check index:*/}
            {/* {areaIndex} */}
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
    )
}

export default ShowForecast;

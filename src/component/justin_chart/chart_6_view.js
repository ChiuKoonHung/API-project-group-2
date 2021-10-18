import React, {useState, useEffect} from "react";
import UltraVioletReadings from "./justin_UVReading.js";
import './justin_UVReading.css';
import API from "../../API.js";

function DisplayForecast(props) {

  const [uvIndex, setUVIndex] = useState(null);
    const [uvTime, setUVTime] = useState(null);
    const [uvStatus, setUVStatus] = useState(null);
    
    const dateToday = new Date().toLocaleDateString('en-CA');
    const timeNow = new Date().toLocaleTimeString('en-GB');
    const dateTime = (dateToday+"T"+timeNow);

    useEffect(() => {
        const fetchIndex = async (e) => {
        try {
            const response = await API.get(`/uv-index?date_time=${dateTime}`);
            setUVIndex(response.data.items[0].index[0]["value"]);  
            setUVTime(response.data.items[0].index[0]["timestamp"]);
            setUVStatus(response.data.api_info.status);
        } catch(err){
            console.log(err);
        }
        }
        fetchIndex();
    }, [])

    return (
        <>
        <div className='readings-container'>
          <h3 className='heading'>Ultra-Violet Index & Status update</h3>
          <hr />
          <UltraVioletReadings time={uvTime} status={uvStatus} index={uvIndex} />
        </div>
        </>
    )
}

export default DisplayForecast;
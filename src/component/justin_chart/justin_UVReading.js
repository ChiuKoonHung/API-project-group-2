import React, {useState, useEffect} from "react";
import API from "../../API.js";
import './justin_UVReading.css';
import moment from 'moment';

function UltraVioletReadings(props) {
    const [uvIndex, setUVIndex] = useState(null);
    const [uvTime, setUVTime] = useState(null);
    const [uvStatus, setUVStatus] = useState(null);
    const format1 = "MMMM Do YYYY, HH:mm:ss a"
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
            <div className='dateTime'>
            {/* // display date & time  */}
             <p className='status-check'>Hourly update as of:</p><p className='status-remarks'>~ {moment(uvTime).format(format1, true)}</p>
            </div>
            <hr />
            <div className='status'>
            {/* // set condition for UV status.  */}
            { uvStatus === "healthy" ? 
            <>
            <p className='status-check'>Status: {uvStatus}</p><p className='status-remarks'>~ Safe to go out</p>
            </> :
            <>
            <p className='status-check'>Status: {uvStatus}</p><p className='status-remarks'>~ Avoid going out!</p>
            </>}
            </div>
            <hr />
            <div className='index'>
            {/* // set condition for UV index.  */}
            { uvIndex >= 6 ? 
            <>
             <p className='index-display'>Ultra-violet Index: {uvIndex}</p><p className='index-remarks'>~ Remember to apply sunscreen and wear sunglasses when going out!</p>
            </> :
            <>
            <p className='index-display'>Ultra-violet Index: {uvIndex}</p><p className='index-remarks'>~ Index is currently low/moderate</p>
            </>}
            </div>
        </>
    )
}

export default UltraVioletReadings; 


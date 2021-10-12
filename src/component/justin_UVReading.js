import React, {useState} from "react";
import API from "../API";
import '../App.css';
import moment from 'moment';

function UltraVioletReadings(props) {
    const [date, setDate] = useState(null);
    const [uvIndex, setUVIndex] = useState(null);
    const [uvTime, setUVTime] = useState(null);
    const [uvStatus, setUVStatus] = useState(null);
    const format1 = "MMMM Do YYYY, HH:mm:ss a"
    const date1 = uvTime;

    const handleInput = (e) => {
        setDate(e.target.value);  //store the input
    }

    const fetchIndex = async (e) => {
        const formats = ["YYYY-MM-DD HH:mm:ss"];  //set format for date & time validation
        const checkDateTime = moment(e.target.value, formats, true).isValid()  //validate date & time input as per format
        if(e.key === 'Enter' && checkDateTime) {
        const response = await API.get(`/uv-index`);
        setUVIndex(response.data.items[0].index[0]["value"]);  
        setUVTime(response.data.items[0].index[0]["timestamp"]);
        setUVStatus(response.data.api_info.status);
        console.log(response.data.items);
    }
}

    return (
        <>
        <div className='readings-container'>
            <h3>Ultra-Violet Index & Status update</h3>
            <hr />
            <input className='input-box' type='text' placeholder='Enter YYYY-MM-DD HH:mm:ss' onChange={handleInput} onKeyPress={fetchIndex} />
            <br/>
            <hr />
        <div className='dateTime'>
            {/* // set condition to display date & time  */}
            { ! uvTime ? null :
            <>
             <p>
             {moment(date1).format(format1, true)}
             </p>
            </>}
        </div>
        <hr />
        <div className='status'>
            {/* // set condition for UV status.  */}
           { ! uvStatus ? null :
            <>
            { uvStatus === "healthy" ? 
            <>
            <p className='status-check'>Status: {uvStatus}. Safe to go out.</p>
            </> :
            <>
            <p className='status-check'>Status: {uvStatus}. Avoid going out!</p>
            </>}
            </>}
        </div>
        <hr />
        <div className='index'>
            {/* // set condition for UV index.  */}
            { ! uvTime ? null :
            <>
            { uvIndex >= 6 ? 
            <>
             <p>
             Ultra-violet Index: {uvIndex}. <br/>Remember to apply sunscreen and wear sunglasses when going out!
             </p>
            </> :
            <p>
            Ultra-violet Index: {uvIndex}. <br/>Index is currently low/moderate. 
            </p>}
            </>}
        </div>
        </div>
        </>
    )
}

export default UltraVioletReadings; 


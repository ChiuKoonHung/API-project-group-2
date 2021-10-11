import React, {useState} from "react";
import API from "../API";
import './justin_UVReadings.css';

function UltraVioletReadings(props) {
    const [date, setDate] = useState(null);
    const [uvIndex, setUVIndex] = useState(null);
    const [uvTime, setUVTime] = useState(null);
    const [uvStatus, setUVStatus] = useState(null);

    const handleInput = (e) => {
        setDate(e.target.value);
    }

    const fetchIndex = async (e) => {
        if(e.key === 'Enter') {
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
        <input className='input-box' type='text' placeholder='Enter date' onChange={handleInput} onKeyPress={fetchIndex} />
        <br/>
    </div>
    <div>
        <p>Date and Time: {uvTime}</p>
        <p>Status: {uvStatus}</p>
        { ! uvStatus ? null :
        <>
        { uvIndex >= 6 ? 
        <>
         <p>
         Ultra-violet Index: {uvIndex}. <br/>Remember to apply sunscreen and wear sunglasses when going out!
         </p>
        </> :
        <p>
        Ultra-violet Index: {uvIndex} <br/>Index is currently low/moderate. 
        </p>}
        </>}
    </div>
    </>
)
}

export default UltraVioletReadings;
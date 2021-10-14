import React from "react";
import UltraVioletReadings from "./justin_UVReading.js";
import './justin_UVReading.css';

function DisplayForecast(props) {

    return (
        <>
        <div className='readings-container'>
          <h3 className='heading'>Ultra-Violet Index & Status update</h3>
          <hr />
          <UltraVioletReadings />
        </div>
        </>
    )
}

export default DisplayForecast;
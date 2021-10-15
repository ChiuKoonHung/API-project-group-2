import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import "./clam-psi.css";


    const baseURL = "https:api.data.gov.sg/v1/environment/psi";

 function PSI() {
    
        
    const [psi, setPsi] = useState(null);
    const [east, setEast] = useState(null);
    const [west, setWest] = useState(null);
    const [central, setCentral] = useState(null);
    const [north, setNorth] = useState(null);

   
    useEffect(() => {
        async function getReading() {
            await axios.get(baseURL).then((response) => {
                setPsi(response.data.items[0]);
               
                });
        }
        getReading();
    }, []);

    if (!psi) return null;

    return (
        <div>
            {typeof psi != ("undefined" || null) ? (
                <div className="PSI">
                    <div className="Main-container">
                        <div className="header">
                            <p>PSI Readings </p>
                        </div>
                    </div>
                 

                    <div class="Sub-container-1">
                        <ul>
                            <p>East: {psi.readings.psi_twenty_four_hourly.east}</p>
                            <p>West: {psi.readings.psi_twenty_four_hourly.west}</p>
                            <p>Central: {psi.readings.psi_twenty_four_hourly.central}</p>
                            <p>North: {psi.readings.psi_twenty_four_hourly.north}</p>
                            <p>South: {psi.readings.psi_twenty_four_hourly.south}</p>
                        </ul>
                    </div>
                            
                </div>
            ) : (
                <div>
                    <Dimmer active>
                        <Loader>Loading..</Loader>
                    </Dimmer>
                </div>
            )}
        </div>
    );
}

export default PSI
   
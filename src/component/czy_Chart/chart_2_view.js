import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import "./czy_PM25.css";

const baseURL = "https://api.data.gov.sg/v1/environment/pm25";

export default function PM() {
    const [pm, setPm] = useState(null);

    useEffect(() => {
        async function getReading() {
            await axios.get(baseURL).then((response) => {
                setPm(response.data.items[0]);
                console.log("pm return ", pm);
            });
        }
        getReading();
    }, []);

    if (!pm) return null;

    return (
        <div>
            {typeof pm != "undefined" ? (
                <div className="PM25">
                    <div className="top-container">
                        <div className="header">
                            <p>PM2.5 readings </p>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <ul>
                            <p>East: {pm.readings.pm25_one_hourly.east}</p>
                            <p>West: {pm.readings.pm25_one_hourly.west}</p>
                            <p>Central: {pm.readings.pm25_one_hourly.central}</p>
                            <p>North: {pm.readings.pm25_one_hourly.north}</p>
                            <p>South: {pm.readings.pm25_one_hourly.south}</p>
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

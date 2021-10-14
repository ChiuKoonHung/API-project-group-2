// import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./czy_weather";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Weather() {
    const [data, setData] = useState([]);

    //you tell React that your component needs to do something after render
    useEffect(() => {
        const fetchData = async () => {
            const geoLocation = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    resolve({ lat, long });
                });
            });
            // console.log(geoLocation);
            await axios
                .get(
                    `${process.env.REACT_APP_API_URL}/weather/?lat=${geoLocation.lat}&lon=${geoLocation.long}&appid=${process.env.REACT_APP_API_KEY}`
                )
                .then((res) => {
                    // console.log(res.data);
                    setData(res.data);
                });
            // await fetch(
            //     `${process.env.REACT_APP_API_URL}/weather/?lat=${geoLocation.lat}&lon=${geoLocation.long}&appid=${process.env.REACT_APP_API_KEY}`
            // )
            //     .then((res) => res.json()) //here comsume the value
            //     .then((result) => {
            //         //here set the result
            //         setData(result);
            //         console.log(result);
            //     });
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {typeof data.main != "undefined" ? (
                <WeatherCard weatherData={data} />
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

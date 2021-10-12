// import "./App.css";
import React, { useEffect, useState } from "react";
import WeatherCard from "./czy_weather";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Weather() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            //fetch() starts a request and returns a promise.
            await fetch(
                `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => res.json()) //here comsume the value
                .then((result) => {
                    //here set the result
                    setData(result);
                    console.log(result);
                });
        };
        fetchData();
    }, [lat, long]);

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

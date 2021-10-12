// import "./App.css";
import React, { useEffect, useState } from "react";
import WeatherCard from "./czy_weather";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Weather() {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    //you tell React that your component needs to do something after render
    useEffect(() => {
        const fetchData = async () => {
            console.log("hahahahah");
            let lat, long;
            let location = await navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log(`inside:${long},${lat}`);
                return { lat, long };
                // setLat(position.coords.latitude);
                // setLong(position.coords.longitude);
            });
            console.log("location", `${location}`);
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

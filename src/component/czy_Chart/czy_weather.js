import React from "react";
import "./czy_weather.css";
import moment from "moment";
import { Button } from "semantic-ui-react";

const refreshbutton = () => {
    window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
    <div className="main">
        <div className="top">
            <p className="header">{weatherData.name}</p>
            <Button className="button" inverted color="blue" onClick={refreshbutton}>
                Refresh
            </Button>
        </div>
        <div className="flex">
            <p className="day">
                {moment().format("dddd")}, <span>{moment().format("LL")}</span>
            </p>
            <p className="description">{weatherData.weather[0].description}</p>
        </div>
        <div className="flex">
            <p className="temp">Temprature: {Math.round((weatherData.main.temp - 272.15) * 100) / 100}&deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        </div>
        <div className="flex">
            <p className="temp">Feels like: {Math.round((weatherData.main.feels_like - 272.15) * 100) / 100}&deg;C</p>
            <p className="temp">Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
        <div className="flex">
            <p className="temp">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}</p>
            <p className="temp">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}</p>
        </div>
    </div>
);

export default WeatherCard;

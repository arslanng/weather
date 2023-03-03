import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState("Bursa");

    const [weather, setWeather] = useState();
    const values = {
        weather,
        setWeather,
        cityName,
        setCityName,
    }

    useEffect(()=> {
        // const getCity = (cityName) => {
            const key = `aca40b1222de42359ce52655230203`;

            axios(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&lang=tr&days=7`)
            .then((res) => res.data)
            .then((data) => setWeather(data.forecast.forecastday))
        // };
        // cityName && getCity(cityName)
    }, [cityName]);

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
};

export const useWeather = () => useContext(WeatherContext);

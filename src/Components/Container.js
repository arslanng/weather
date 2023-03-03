import React from "react";
import { useWeather } from "../Context/WeatherContext";

function Container() {
  const { weather } = useWeather();

  if (!weather) {
    return <div>Loading...</div>;
  }
  const day = (x) => {
    let dayNumber = new Date(x).getDay();
    if (dayNumber === 0) {
      return "Pazar";
    } else if (dayNumber === 1) {
      return "Pazartesi";
    } else if (dayNumber === 2) {
      return "Salı";
    } else if (dayNumber === 3) {
      return "Çarşamba";
    } else if (dayNumber === 4) {
      return "Perşembe";
    } else if (dayNumber === 5) {
      return "Cuma";
    } else if (dayNumber === 6) {
      return "Cumartesi";
    }
  };
  return (
    <div className="dateContainer">
      <div className="date soft">
        {weather.map((data, i) => (
          <div key={i} className="maping">
            <h3>{day(data.date)}</h3>
            <img
              className="images"
              src={`${data.day.condition.icon}`}
              alt=""
              srcset=""
            />
            <p>
              <span className="dark">{data.day.maxtemp_c}°C</span> 
              <span className="soft"> {data.day.mintemp_c}°C</span>
            </p>
            <p>{/* {JSON.stringify(data.day)} */}</p>
          </div>
        ))}
        {/* {JSON.stringify(weather[0])} */}
      </div>
    </div>
  );
}

export default Container;

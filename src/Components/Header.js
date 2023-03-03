import React from 'react'
import { useWeather } from '../Context/WeatherContext'

function Header() {
    const { cityName, setCityName } = useWeather();
  return (
    <div>
        <h1>
            {cityName}
        </h1>
        <select name="city" value={cityName} onChange={(e)=>setCityName(e.target.value)}>
            <option value="Bursa">Bursa</option>
            <option value="Eskisehir">Eskişehir</option>
            <option value="Balıkesir">Balıkesir</option>
            <option value="Burdur">Burdur</option>
            <option value="Kayseri">Kayseri</option>
            <option value="Nevşehir">Nevşehir</option>
        </select>
    </div>
  )
}

export default Header
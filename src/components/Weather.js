import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import tempIcon from "./image/temp.png"
import tempIcon1 from "./image/humidity.png"
import tempIcon2 from "./image/weather.png"
import tempIcon3 from "./image/wind.png"


function Weather(){
    const [city,setCity]=useState();
    const [weather,setweather]=useState();
    const handleCityChange=(e)=>{
        setCity(e.target.value)
    }
    const fetchWeather = async()=>{
        try{
            const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=381f98480e4ab8ceff76464bc8a89e9f`)
            setweather(response)
            console.log(response)
            
        }catch(error){
            console.log("Error fetching weather data",error)

        }
    }
    
    const handleClick=()=>{
        fetchWeather()
        setCity("");
    }
    const handleKeyPress =(e)=>{
        if(e.key==="Enter"){
            handleClick()
        }

    }
    return(
        <div className="weather-container">
            <input type="text" placeholder="Enter your city" value={city} 
            onChange={handleCityChange} onKeyDown={handleKeyPress}/>
            <button onClick={handleClick}>Get Weather Info</button>
            {weather && <>
            <div className="show">
                <h3>{weather.data.name}</h3>
                <p >
                    <img src={tempIcon} className="p-icon" alt="temp"/>
                Temperature : {weather.data.main.temp} &deg;C </p>
                <p>  <img src={tempIcon1} className="p-icon" alt="humi"/> 
                         Humidity : {weather.data.main.humidity} %</p>
                <p>  <img src={tempIcon2} className="p-icon" alt="descs"/>
                       Condition : {weather.data.weather[0].description}</p>
                <p>  <img src={tempIcon3} className="p-icon" alt="winssp"/>
                           Wind Speed : {weather.data.wind.speed}</p>
               
                </div>    
            </>}

        </div>
    )
}
export default Weather;
import React from "react";
import Spinner from "./Spinner";


const Card = ({loadingData, showData, weather}) => {

        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        let date = day + "/" + month + "/" + year;

        let url = ""
        let iconUrl = ""

       /* const apiKey = "85f33e398058ea336b1a9b079c6a07da"

        const log = position => {
            https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        }

        const onload = () => {
            navigator.geolocation.getCurrentPosition(log)
        }*/

        if (loadingData){
            return <Spinner/>;
        }

        if (showData){
            url = "http://openweathermap.org/img/w/";
            iconUrl = url + weather.weather[0].icon + ".png";

        }

    return (
        <div className="post-card">

            {
                showData === true? (
                    
                        <div className="card">
                            
                                
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>                                
                                     <h5>wind speed: {weather.wind.speed}m/s</h5> 
                                    <h5>humidity: {weather.main.humidity}%</h5>
                                 
                                    
                          
                        </div>

                    
                ): (
                    <h2> enter location </h2>
                )
            }


        </div>

    )

    

};


export default Card;
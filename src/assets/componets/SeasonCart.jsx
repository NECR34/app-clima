import React, {useState} from "react";
import DataCart from "./DataCart";
import Card from "./Card";

const SeasonCart = () => {
    let urlSeason = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=85f33e398058ea336b1a9b079c6a07da&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=85f33e398058ea336b1a9b079c6a07da&lang=es"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {

        setLoading(true);
        setLocation(loc);

        //Season

        urlSeason = urlSeason + cityUrl + loc;

        await fetch(urlSeason).then((response) => {
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);           
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData); 
            
            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }

    return(
        <React.Fragment>
            
            <DataCart
                newLocation = {getLocation}
            />   

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />

        </React.Fragment>
    );

}
export default SeasonCart
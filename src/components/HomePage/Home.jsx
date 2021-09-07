import React, {useState, useEffect} from 'react';
import { NavbarMenu } from './NavbarMenu';
import {Slider} from "./Slider.jsx";
import {NavPanel} from "./NavPanel"; 
import {CardList} from "./CardList";
import {Footer} from "./Footer";
import {App }from "./App";
import { API_URL, API_KEY ,APP_ICON_URL} from '../../common/constants';
import { get } from '../../common/axiosApiProxy';
// import {Testing} from "../../components/HomePage/test";

export const Home = () => {
    const [weatherData, setWeatherData] = useState({});
    console.log("WW", weatherData);
    const [search, setSearch] = useState("");

    const getDateForSun = (unixUtc) => {
    let unix_timestamp = Number(unixUtc);
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes =  + date.getMinutes();
    
    return `${hours}:${minutes}`}


    useEffect(() => {
        getData();
    }, [search]);

    const getData = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            get(`${API_URL}/weather${API_KEY}&q=${search}&lang=ru&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}`, (weatherObj) => {
                if(weatherObj.data.main){
                    weatherObj.data.main.temp = Math.floor(weatherObj.data.main.temp); 
                }
                setWeatherData(weatherObj.data);
            });
          });              
    };

    return (
        <>
            <div >
                <NavbarMenu />
                {/* <Slider/> */}
                <NavPanel/>
                {/* <Testing /> */}
                <App weatherData={weatherData}  />
                <CardList weatherData={weatherData} setSearch={setSearch} search={search} getData={getData} getDateForSun={getDateForSun}/>
                <Footer/>

            </div>
        </>
    );
};




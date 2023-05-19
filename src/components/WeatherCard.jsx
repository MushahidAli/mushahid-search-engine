import axios from 'axios';
import { useState, useEffect } from 'react';

export default function WeatherCard() {

    var city;
    var weatherdata = [];
    var result;

    async function run() {
        await axios.get('http://ip-api.com/json/')
        .then(res => city = (res.data.city))
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f55ab993ce5036a8a971de860791b5a5&units=metric`)
        .then(val => weatherdata = val)
        result = weatherdata.data.main.temp + "°C " + weatherdata.data.weather[0].description;
        document.getElementById('show').innerHTML = "<div style='text-align:right;color:white'><span style='background-color:black;border-radius:5px;font-size:12px'> &gt;_ Current Weather - " +result+ "</span></div>";
    }

        useEffect(() => {
        run();
        },[city]);

    return(<><p id='show'></p></>);
}
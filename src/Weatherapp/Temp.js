import React, { useState, useEffect, Fragment } from 'react'
import './style.css'
function Temp() {
const[city,setCity]=useState({});
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=16e01cb34942e37eefe093f1fc7909d1`;
            const response=await fetch(url);
            const resJson=await response.json();
            console.log(resJson);
            setCity(resJson);

        }
        fetchApi();
    },[setSearch]);
    

return(
    <div className="app">
        <main>
        <div className="search-box">
            <input  className="search-bar" type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div className="location-box">
            <div className="location">{search}</div>
            <div className="date"></div>
            <div className="weather-box">
                <div className="temp">{search.main.temp}</div>
                <div className="weather"></div>

            </div>

        </div>
        </main>
    </div>
)


}

export default Temp
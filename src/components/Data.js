import React from "react";
import "../assets/styles/components/Data.css";
import sunny from "../assets/images/sunny.png";
import rain from "../assets/images/rain.png";
import snow from "../assets/images/snow.png";
import cloud from "../assets/images/cloud.png";

const Data = ({city,country,temp,mintemp,maxtemp,weather})=>{
        let clima;

        switch (weather) {
                case "Clouds":
                clima = cloud;
                        break;
                case "Clear":
                clima = sunny;
                        break;
                case "Snow":
                clima = snow;
                        break;
                case "Rain":
                clima = rain;
                        break;
                default:
                        break;
        }
        
        return(
                <div className="Data-container">
                       
                         <div className="infoContainer">
                                <h1 className="info-title">{city}</h1>
                                <p className="country">{country}</p>
                                <h2 className="info-main-weather">{temp}</h2>
                                <p className="info-minmax-weather">{mintemp} {maxtemp}</p>
                        </div>
                        <img className="weatherIcon" src={clima} alt=""/>

                 </div>
        );
}

export default Data;
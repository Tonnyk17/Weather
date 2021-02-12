
import Header from "../components/Header";
import React from "react";
import Data from "../components/Data";


class App extends React.Component{
    state = {
        country : "",
        city:"",
        temp: "",
        mintemp: "",
        maxtemp: "",
        weather: "",
    }
    getWeather = (e)=>{
        e.preventDefault();
        const {ciudad} = e.target.elements;
        const nameCity = ciudad.value;
         

        const API = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&appid=f2b4e3391de667bc9edb32323c927707`;
        fetch(API)
        .then(response => response.json())
        .then(data => {
            this.setState({
                country : data.sys.country,
                city: data.name,
                temp: `${data.main.temp}°`,
                mintemp: `${data.main.temp_min}° /`,
                maxtemp: `${data.main.temp_max}°`,
                weather: data.weather[0].main,
            })
            console.log(data);
        })
       
      
    }
    render(){
        return(
        <div>
            <Header getWeather={this.getWeather} icono={this.state.icon}/>
            <Data 
            city={this.state.city} 
            country={this.state.country} 
            temp={this.state.temp} 
            mintemp={this.state.mintemp}
            maxtemp={this.state.maxtemp}
            weather={this.state.weather}/>
        </div>
    )};
};

export default App;
import React from "react";
import "../assets/styles/components/Header.css";

const Header = ({getWeather}) => {
    return(
        <div>
            <header>
                <div className="head-container">
                    <form onSubmit={getWeather} className="form">
                         <input type="text" placeholder="Your city" className="inputCity" name="ciudad"/>
                         <button type="submit" className="button">Search</button>
                    </form>
                  
                </div>
            </header>
        </div>
    )
}

export default Header;
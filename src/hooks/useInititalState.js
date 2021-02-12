import {useState, useEffect} from "react";


const useInitialState = (API) => {
    const [ weather , setWeather ] = useState([]);
    
        useEffect(() =>{
            fetch(API)
            .then(response => response.json())
            .then(data => setWeather(data))
        }, []);
        return weather;
}

export default useInitialState;
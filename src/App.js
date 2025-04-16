import {useEffect } from "react";

import Card  from "./components/card";
import Input from "./components/input";
import Button from "./components/Button";

// import Button from "./components/button";
import { useWeather } from "./context/weather";



import React from "react";
import "./App.css" ;
function App() {
  const weather = useWeather();
  console.log("weather", weather);

useEffect(() => {
  //get current location 
  weather.fetchCurrentLocationUserData();
}, []);

  return (
    <div className="App">
     
        <h1>weather forecast</h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
        
        <Button value= "Refresh" />

         </div>
         ) ;
        } 
export default App ;


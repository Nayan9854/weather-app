import { createContext , useContext , useState} from "react";
import { getWeather , getWeatherlocation} from "../api";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
} ;
export const WeatherProvider = (props) => {
  const [data , setData] = useState(null);
  const [searchCity , setSearchCity] = useState("");

  const fetchData = async () =>   {
    const response = await getWeather(searchCity);
    setData(response);
  } ;

  const fetchCurrentLocationUserData = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
    getWeatherlocation(
      position.coords.latitude ,
       position.coords.longitude
      ).then(data => {
        setData(data);
      }) ;
    
      
    });
  } ;


  return ( 
  <WeatherContext.Provider value={{searchCity , data ,setSearchCity , fetchData ,
    fetchCurrentLocationUserData,
   }}>{props.children}</WeatherContext.Provider> 
  );
};
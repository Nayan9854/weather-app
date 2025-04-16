const baseURL = "https://api.weatherapi.com/v1/current.json?key=7dca6894c4634a6e8b152307251504&" ;

export const getWeather = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`); 
  return await response.json() ;
} ;

export const getWeatherlocation = async (lat , long) => {
  const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`); 
  return await response.json() ;
} ;
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { fetchWeatherDataCity, fetchWeatherDataLL } from './utils/apiCalls';
import Weather from './components/Weather';

function App() {

  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  
  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  
  async function success(position: GeolocationPosition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // console.log(await fetchWeatherDataLL(latitude, longitude));
    // console.log(await fetchWeatherDataCity('London'));
    
    setHasLocation(true);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
    setHasLocation(false);
  }
  
  useEffect(handleLocation, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {hasLocation ? <Weather /> : <h1>Turn on the location or search for a city to display weather.</h1>}
      </div>
    </>
  )
}

export default App

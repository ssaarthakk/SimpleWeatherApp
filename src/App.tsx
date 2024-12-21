import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { fetchWeatherDataLL } from './utils/apiCalls';
import Weather from './components/Weather';
import { ApiResponse } from './types/apiResponseType';
import Forecast from './components/Forecast';

function App() {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
      setFetching(false);
    }
  }

  async function success(position: GeolocationPosition) {
    setFetching(true);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // const wd: ApiResponse = await fetchWeatherDataLL(latitude, longitude);
    // console.log(wd);
    // setWeatherData(wd);
    setHasLocation(true);
    setFetching(false);
  }

  function error() {
    console.log("Unable to retrieve your location");
    setHasLocation(false);
    setFetching(false);
  }

  useEffect(handleLocation, []);

  return (
    <>
      <Navbar setWeatherData={setWeatherData} fetching={fetching} setFetching={setFetching} />
      <div className="flex flex-col justify-center items-center ">
        <Weather weatherData={weatherData} fetching/>
        {
          weatherData && <Forecast weatherData={weatherData} />
        }
      </div>
    </>
  )
}

export default App

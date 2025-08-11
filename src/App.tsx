import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { fetchWeatherDataLL } from './utils/apiCalls';
import Weather from './components/Weather';
import { ApiResponse } from './types/apiResponseType';
import Forecast from './components/Forecast';
import { AxiosResponse } from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      setFetching(false);
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
    const res: AxiosResponse | null = await fetchWeatherDataLL(latitude, longitude);
    console.log(res?.status);
    if (res?.status === 400) {
      setWeatherData(null);
      setFetching(false);
      return;
    }
    setWeatherData(res?.data);
    setFetching(false);
  }

  function error() {
    console.log("Unable to retrieve your location");
    setFetching(false);
  }

  useEffect(handleLocation, []);

  return (
    <>
      <Navbar setWeatherData={setWeatherData} fetching={fetching} setFetching={setFetching} />
      <main className="flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 md:px-8 py-6 md:py-10">
          <Weather weatherData={weatherData} fetching={fetching} />
          {weatherData && (
            <div className="mt-8">
              <Forecast weatherData={weatherData} />
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App

import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { fetchWeatherDataLL } from './utils/apiCalls';
import Weather from './components/Weather';
import { ApiResponse } from './types/apiResponseType';
import Forecast from './components/Forecast';
import { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, handleLocationError);
    } else {
      console.log("Geolocation not supported");
      setError("Geolocation is not supported by your browser");
      toast.error("Geolocation is not supported by your browser");
    }
  }, []);

  async function success(position: GeolocationPosition) {
    try {
      setFetching(true);
      setError(null);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const res: AxiosResponse | null = await fetchWeatherDataLL(latitude, longitude);
      
      if (!res) {
        setError("Failed to fetch weather data. Please try again.");
        toast.error("Failed to fetch weather data. Please try again.");
        setWeatherData(null);
        setFetching(false);
        return;
      }
      
      if (res.status !== 200) {
        setError("Failed to fetch weather data. Please try again.");
        toast.error("Failed to fetch weather data. Please try again.");
        setWeatherData(null);
        setFetching(false);
        return;
      }
      
      setWeatherData(res.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("An error occurred while fetching weather data. Please try again.");
      toast.error("An error occurred while fetching weather data. Please try again.");
      setWeatherData(null);
    } finally {
      setFetching(false);
    }
  }

  function handleLocationError() {
    console.log("Unable to retrieve your location");
    setError("Unable to retrieve your location. Please enable location services or search for a city.");
    toast.error("Unable to retrieve your location. Please enable location services or search for a city.");
    setFetching(false);
  }

  useEffect(() => {
    // Only fetch location on initial load if no weather data exists
    if (!weatherData) {
      handleLocation();
    }
  }, [weatherData, handleLocation]);

  return (
    <>
      <Navbar 
        setWeatherData={setWeatherData} 
        fetching={fetching} 
        setFetching={setFetching} 
        setError={setError}
      />
      <main className="flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 md:px-8 py-6 md:py-10">
          <Weather weatherData={weatherData} fetching={fetching} error={error} />
          {weatherData && (
            <div className="mt-8">
              <Forecast weatherData={weatherData} />
            </div>
          )}
        </div>
      </main>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App

import { useState } from "react";
import IconSearch from "./svgs/SearchIcon"
import { fetchWeatherDataCity } from "../utils/apiCalls";
import { ApiResponse } from "../types/apiResponseType";
import { AxiosResponse } from "axios";

function Navbar({ setWeatherData, fetching, setFetching, toast }: { setWeatherData: Function, fetching: boolean, setFetching: Function, toast: Function }) {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const inputField = document.getElementById('searchF') as HTMLInputElement;
  const inputFieldd = document.getElementById('searchFF');
  inputField?.addEventListener('keyup', (e) => {
    if (e?.code === 'Enter') {
      document.getElementById('searchBtn')?.click();
    }
  });
  inputFieldd?.addEventListener('keyup', (e) => {
    if (e?.code === 'Enter') {
      document.getElementById('searchBtnn')?.click();
    }
  });

  function handleSearchClick() {
    setShowSearch(prev => !prev);
  }

  async function handleFetchWeather() {
    try {
      setFetching(true);
      if (search === '') {
        setWeatherData(null);
        return;
      } else {
        const res: AxiosResponse | null = await fetchWeatherDataCity(search);
        if (res?.status === 400) {
          setWeatherData(null);
          toast('Unable to fetch weather data. Please try again.');
        } else {
          setWeatherData(res?.data as ApiResponse);
        }
      }
    } catch (error) {
      console.log('Error fetching data with city: ', error);
    } finally {
      setSearch('');
      setFetching(false);
    }
  }

  return (
    <nav className="max-w-screen py-4 px-6 flex justify-between items-center bg-gray-100 text-gray-800 overflow-clip max-h-[10vh]">
      <span className="text-4xl font-bold">
        Weather App
      </span>
      <div className="sm:block hidden">
        <input type="text" id="searchF" className='bg-gray-400 text-black focus:outline-gray-600 px-4 py-2 rounded-l-md border-gray-800' value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button disabled={fetching} id="searchBtn" className="px-4 py-2 bg-gray-800 text-white h-full rounded-r-md" onClick={handleFetchWeather}>
          {
            !fetching ? (
              "Search"
            ) : "Fetching..."
          }
        </button>
      </div>
      <div className="sm:hidden block">
        <button className="px-4 py-2 bg-gray-800 text-white h-full rounded-md" onClick={handleSearchClick}>
          <IconSearch className="w-6 h-6" />
        </button>
        {showSearch && (
          <div className='absolute right-6 top-20'>
            <input id="searchFF" type="text" className='bg-gray-400 text-black focus:outline-gray-600 px-4 py-2 rounded-l-md border-gray-800' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button disabled={fetching} id="searchBtnn" className="px-4 py-2 bg-gray-800 text-white h-full rounded-r-md" onClick={handleFetchWeather}>
              {
                !fetching ? "Search" : "Fetching..."
              }
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
import { useEffect, useRef, useState } from "react";
import IconSearch from "./svgs/SearchIcon"
import { fetchWeatherDataCity } from "../utils/apiCalls";
import { ApiResponse } from "../types/apiResponseType";
import { AxiosResponse } from "axios";

function Navbar({ setWeatherData, fetching, setFetching }: { setWeatherData: Function, fetching: boolean, setFetching: Function }) {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const desktopInputRef = useRef<HTMLInputElement | null>(null);
  const mobileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        void handleFetchWeather();
      }
    }
    const dEl = desktopInputRef.current;
    const mEl = mobileInputRef.current;
    dEl?.addEventListener('keyup', onKey);
    mEl?.addEventListener('keyup', onKey);
    return () => {
      dEl?.removeEventListener('keyup', onKey);
      mEl?.removeEventListener('keyup', onKey);
    }
  }, []);

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
        } else {
          setWeatherData(res?.data as ApiResponse);
        }
      }
    } catch (error) {
      console.log('Error fetching data with city: ', error);
    } finally {
      setSearch('');
      setFetching(false);
      setShowSearch(false);
    }
  }

  return (
    <nav className="max-w-screen py-4 px-6 flex justify-between items-center backdrop-blur bg-black/30 text-slate-100 shadow-soft border-b border-white/10">
      <span className="text-3xl md:text-4xl font-bold tracking-tight">
        Weather
        <span className="text-sky-400">.</span>
      </span>
      <div className="hidden sm:flex items-stretch">
        <input
          ref={desktopInputRef}
          type="text"
          id="searchF"
          placeholder="Search city..."
          className='bg-white/10 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70 px-4 py-2 rounded-l-md border border-white/10'
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <button
          disabled={fetching}
          id="searchBtn"
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-white h-full rounded-r-md border border-sky-600"
          onClick={handleFetchWeather}
        >
          { !fetching ? ("Search") : "Fetching..." }
        </button>
      </div>
      <div className="sm:hidden block relative">
        <button className="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white h-full rounded-md" onClick={handleSearchClick} aria-label="Open search">
          <IconSearch className="w-6 h-6" />
        </button>
        {showSearch && (
          <div className='absolute right-0 top-12 flex items-stretch shadow-soft rounded-md overflow-hidden border border-white/10 backdrop-blur bg-black/60'>
            <input
              ref={mobileInputRef}
              id="searchFF"
              type="text"
              placeholder="City name"
              className='bg-white/10 placeholder-slate-400 text-slate-100 focus:outline-none px-4 py-2 border-r border-white/10'
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
            <button disabled={fetching} id="searchBtnn" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-white h-full" onClick={handleFetchWeather}>
              { !fetching ? "Go" : "..." }
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
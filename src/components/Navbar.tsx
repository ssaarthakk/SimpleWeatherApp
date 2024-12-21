import { useState } from "react";
import IconSearch from "./svgs/SearchIcon"

function Navbar() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  function handleSearchClick() {
    setShowSearch(prev => !prev);
  }

  function handleFetchWeather() {
    console.log(search);
  }

  return (
    <nav className="wscreen py-4 px-6 flex justify-between items-center bg-gray-100 text-gray-800">
      <span className="text-2xl ">
        Weather App
      </span>
      <div className="sm:block hidden">
        <input type="text" className='bg-gray-400 text-black focus:outline-gray-600 px-4 py-2 rounded-l-md border-gray-800' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <button className="px-4 py-2 bg-gray-800 text-white h-full rounded-r-md" onClick={handleFetchWeather}>
          Search
        </button>
      </div>
      <div className="sm:hidden block">
        <button className="px-4 py-2 bg-gray-800 text-white h-full rounded-md" onClick={handleSearchClick}>
          <IconSearch className="w-6 h-6" />
        </button>
        {showSearch && (
          <div className='absolute right-6 top-20'>
            <input type="text" className='bg-gray-400 text-black focus:outline-gray-600 px-4 py-2 rounded-l-md border-gray-800' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <button className="px-4 py-2 bg-gray-800 text-white h-full rounded-r-md" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
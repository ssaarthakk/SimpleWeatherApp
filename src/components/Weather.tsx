import Temperature from './main/Temperature'
import Conditions from './main/Conditions'
import Humidity from './main/Humidity'
import { ApiResponse } from '../types/apiResponseType'

function Weather({ weatherData, fetching }: { weatherData: ApiResponse | null, fetching: boolean }) {
  return (
    weatherData ? (
      <section className='overflow-x-hidden'>
        <div className="text-center">
          <h1 className='text-3xl md:text-4xl font-bold p-4'>Current Weather</h1>
          <h2 className='text-center font-medium text-lg md:text-2xl text-slate-300'>
            {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-4 md:gap-6 grid-cols-1 py-6'>
          <Temperature temperature={weatherData.current.temp_c} feelsLike={weatherData.current.feelslike_c} />
          <Conditions text={weatherData.current.condition.text} icon={weatherData.current.condition.icon} />
          <Humidity humidity={weatherData.current.humidity} windSpeed={weatherData.current.wind_kph} />
        </div>
      </section>
    ) : (
      <div className='text-center py-16'>
        {fetching ? (
          <h1 className='text-3xl font-semibold text-slate-300'>Fetching weather...</h1>
        ) : (
          <h1 className='text-3xl font-semibold text-slate-300'>Search for a city to get started.</h1>
        )}
      </div>
    )
  )
}

export default Weather
import Temperature from './main/Temperature'
import Conditions from './main/Conditions'
import Humidity from './main/Humidity'
import { ApiResponse } from '../types/apiResponseType'

interface WeatherProps {
  weatherData: ApiResponse | null;
  fetching: boolean;
  error?: string | null;
}

function Weather({ weatherData, fetching, error }: WeatherProps) {
  if (weatherData) {
    return (
      <section className='overflow-x-hidden'>
        <div className="text-center mb-8">
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
    );
  }

  return (
    <div className='text-center py-16'>
      {fetching ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mb-4"></div>
          <h1 className='text-3xl font-semibold text-slate-300'>Fetching weather...</h1>
        </div>
      ) : error ? (
        <div className="max-w-md mx-auto">
          <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 backdrop-blur">
            <h1 className='text-3xl font-semibold text-red-300 mb-2'>Error</h1>
            <p className='text-lg text-red-200'>{error}</p>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
            <h1 className='text-3xl font-semibold text-slate-300 mb-2'>Welcome!</h1>
            <p className='text-lg text-slate-400'>Search for a city or enable location services to get started.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather
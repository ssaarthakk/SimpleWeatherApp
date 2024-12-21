import Temperature from './main/Temperature'
import Conditions from './main/Conditions'
import Humidity from './main/Humidity'
import { ApiResponse } from '../types/apiResponseType'

function Weather({ weatherData, fetching }: { weatherData: ApiResponse | null, fetching: boolean }) {
  return (
    weatherData ? (
      <div className='overflow-x-hidden'>
        <div>
          <h1 className='text-4xl font-bold text-center p-6'>Weather Details</h1>
          <h2 className='text-center font-semibold text-2xl'>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
        </div>
        <div className='w-screen grid md:grid-cols-3 gap-4 grid-cols-1 py-6  px-12'>
          <Temperature temperature={weatherData.current.temp_c} feelsLike={weatherData.current.feelslike_c} />
          <Conditions text={weatherData.current.condition.text} icon={weatherData.current.condition.icon} />
          <Humidity humidity={weatherData.current.humidity} windSpeed={weatherData.current.wind_kph} />
        </div>
        <div>

        </div>
      </div>
    ) : (
      !fetching ? (
        <h1 className='text-3xl font-bold p-4 w-screen text-center'>Unable to fetch weather data. Please try again.</h1>
      ) : (
        <h1 className='text-3xl font bold p-4 w-screen text-center'>Fetching weather...</h1>
      )
    )
  )
}

export default Weather
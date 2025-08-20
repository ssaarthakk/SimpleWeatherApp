import { ApiResponse } from '../types/apiResponseType'
import ForecastDay from './main/ForecastDay'

interface ForecastProps {
  weatherData: ApiResponse;
}

function Forecast({ weatherData }: ForecastProps) {
    // Filter out the current day to show only future forecasts
    const futureForecasts = weatherData.forecast.forecastday.slice(1);

    return (
        <div className="mt-12">
            <h1 className='font-bold text-3xl md:text-4xl pb-6 text-center md:text-left'>Next {futureForecasts.length} Days</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    futureForecasts.map((forecastday, index) => (
                        <ForecastDay key={index} date={new Date(forecastday.date).toDateString()} day={forecastday.day} />
                    ))
                }
            </div>
        </div>
    )
}

export default Forecast
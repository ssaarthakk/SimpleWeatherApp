import React from 'react'
import { ApiResponse } from '../types/apiResponseType'
import ForecastDay from './main/ForecastDay'

function Forecast({ weatherData }: { weatherData: ApiResponse }) {

    return (
        <>
            <h1 className='font-bold text-4xl pb-5'>Next 5 Days Forecast</h1>
            <div className='gap-2 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5'>
                {
                    weatherData.forecast.forecastday.map((forecastday, index) => (
                        <ForecastDay key={index} date={new Date(forecastday.date).toDateString()} day={forecastday.day} />
                    ))
                }
            </div>
        </>
    )
}

export default Forecast
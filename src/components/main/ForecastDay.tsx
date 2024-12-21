import { Day } from '../../types/apiResponseType'

function ForecastDay({ date, day }: { date: string, day: Day }) {
  return (
    <div className='flex flex-col items-center gap-2 font-medium bg-gray-100 p-5 rounded-md'>
        <span className='font-bold text-xl'>{date}</span>
        <span>Avg Temperature: {day.avgtemp_c}&deg;C</span>
        <span>Max Temperature: {day.maxtemp_c}&deg;C</span>
        <span>Min Temperature: {day.mintemp_c}&deg;C</span>
        <span>Avg Humidity: {day.avghumidity}%</span>
        <div className='flex items-center justify-center'>
            <span>{day.condition.text}</span>
            <img src={day.condition.icon} alt={day.condition.text + " Image"} />
        </div>
    </div>
  )
}

export default ForecastDay
import { Day } from '../../types/apiResponseType'

function ForecastDay({ date, day }: { date: string, day: Day }) {
  return (
  <div className='flex flex-col items-center gap-2 font-medium p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-soft'>
    <span className='font-bold text-lg md:text-xl text-white text-center'>{date}</span>
    <span className='text-slate-200'>Avg: <span className='text-white font-semibold'>{day.avgtemp_c}&deg;C</span></span>
    <span className='text-slate-200'>Max: <span className='text-white font-semibold'>{day.maxtemp_c}&deg;C</span></span>
    <span className='text-slate-200'>Min: <span className='text-white font-semibold'>{day.mintemp_c}&deg;C</span></span>
    <span className='text-slate-200'>Humidity: <span className='text-white font-semibold'>{day.avghumidity}%</span></span>
    <div className='flex items-center justify-center gap-2'>
      <span className='text-slate-200'>{day.condition.text}</span>
      <img className='w-10 h-10' src={day.condition.icon} alt={day.condition.text + " Image"} />
    </div>
  </div>
  )
}

export default ForecastDay
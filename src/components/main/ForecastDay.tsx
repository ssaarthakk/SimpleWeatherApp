import { Day } from '../../types/apiResponseType'
import { formatTemperature, getDayOfWeek } from '../../utils/formatUtils'

interface ForecastDayProps {
  date: string;
  day: Day;
}

function ForecastDay({ date, day }: ForecastDayProps) {
  // Format the date to show only the day of the week
  const formattedDate = getDayOfWeek(date);
  
  // Add a fallback for the icon in case it's not available
  const iconUrl = day.condition.icon.startsWith("//") ? `https:${day.condition.icon}` : day.condition.icon;

  return (
    <div className='flex flex-col items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-soft transition-all duration-300 hover:scale-105 hover:bg-white/10'>
      <span className='font-bold text-lg text-white'>{formattedDate}</span>
      <img 
        className='w-12 h-12' 
        src={iconUrl} 
        alt={day.condition.text} 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <div className='flex flex-col items-center'>
        <span className='text-2xl font-bold text-white'>{formatTemperature(day.avgtemp_c)}</span>
        <div className='flex gap-2 mt-1'>
          <span className='text-slate-400 text-sm'>H: {formatTemperature(day.maxtemp_c)}</span>
          <span className='text-slate-400 text-sm'>L: {formatTemperature(day.mintemp_c)}</span>
        </div>
      </div>
      <span className='text-slate-300 text-sm text-center mt-1'>{day.condition.text}</span>
      <div className='flex items-center gap-1 mt-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span className='text-slate-400 text-xs'>{Math.round(day.avghumidity)}%</span>
      </div>
    </div>
  )
}

export default ForecastDay
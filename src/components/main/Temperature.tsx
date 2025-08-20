import { formatTemperature } from '../../utils/formatUtils'

interface TemperatureProps {
  temperature: number;
  feelsLike: number;
}

function Temperature({ temperature, feelsLike }: TemperatureProps) {
  return (
    <div className='p-6 rounded-xl flex flex-col border border-white/10 bg-white/5 backdrop-blur shadow-soft transition-all duration-300 hover:bg-white/10'>
      <h1 className='text-2xl md:text-3xl font-bold pb-4 flex items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        Temperature
      </h1>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between py-2'>
          <span className='text-slate-200 flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Current:
          </span>
          <span className='font-semibold text-white text-3xl'>{formatTemperature(temperature)}</span>
        </div>
        <div className='flex items-center justify-between py-2'>
          <span className='text-slate-200 flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Feels like:
          </span>
          <span className='font-semibold text-white text-xl'>{formatTemperature(feelsLike)}</span>
        </div>
      </div>
    </div>
  )
}

export default Temperature
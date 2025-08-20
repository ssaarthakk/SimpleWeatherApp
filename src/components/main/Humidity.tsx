interface HumidityProps {
  humidity: number;
  windSpeed: number;
}

function Humidity({ humidity, windSpeed }: HumidityProps) {
  return (
    <div className='p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-soft transition-all duration-300 hover:bg-white/10'>
      <h1 className='text-2xl md:text-3xl font-bold pb-4 flex items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Humidity & Wind
      </h1>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between py-2'>
          <span className='text-slate-200 flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Humidity:
          </span>
          <span className='font-semibold text-white'>{humidity}%</span>
        </div>
        <div className='flex items-center justify-between py-2'>
          <span className='text-slate-200 flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Wind:
          </span>
          <span className='font-semibold text-white'>{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  )
}

export default Humidity
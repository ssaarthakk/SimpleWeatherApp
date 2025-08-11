function Humidity({ humidity, windSpeed }: { humidity: number, windSpeed: number }) {
  return (
    <div className='text-xl md:text-2xl w-full p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-soft'>
      <h1 className='text-2xl md:text-3xl font-bold pb-2'>Humidity & Wind</h1>
      <div className='text-slate-200'>Humidity: <span className='font-semibold text-white'>{humidity}%</span></div>
      <div className='text-slate-200'>Wind: <span className='font-semibold text-white'>{windSpeed} km/h</span></div>
    </div>
  )
}

export default Humidity
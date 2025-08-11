function Temperature({ temperature, feelsLike }: { temperature: number, feelsLike: number }) {
  return (
    <div className='text-xl md:text-2xl w-full p-6 rounded-xl flex flex-col border border-white/10 bg-white/5 backdrop-blur shadow-soft'>
      <h1 className='text-2xl md:text-3xl font-bold pb-2'>Temperature</h1>
      <span className='text-slate-200'>Now: <span className='font-semibold text-white'>{temperature}&deg;C</span></span>
      <span className='text-slate-200'>Feels like: <span className='font-semibold text-white'>{feelsLike}&deg;C</span></span>
    </div>
  )
}

export default Temperature
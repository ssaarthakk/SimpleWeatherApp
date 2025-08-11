function Conditions({ text, icon }: { text: string, icon: string }) {
  return (
    <div className='text-xl md:text-2xl w-full p-6 rounded-xl flex flex-col border border-white/10 bg-white/5 backdrop-blur shadow-soft'>
      <h1 className='text-2xl md:text-3xl font-bold pb-2'>Conditions</h1>
      <div className='flex flex-row items-center justify-between gap-4'>
        <span className='text-slate-200'>{text}</span>
        <img src={icon} alt="weather icon" className='w-16 md:w-20' />
      </div>
    </div>
  )
}

export default Conditions
interface ConditionsProps {
  text: string;
  icon: string;
}

function Conditions({ text, icon }: ConditionsProps) {
  // Add a fallback for the icon in case it's not available
  const iconUrl = icon.startsWith("//") ? `https:${icon}` : icon;
  
  return (
    <div className='p-6 rounded-xl flex flex-col border border-white/10 bg-white/5 backdrop-blur shadow-soft transition-all duration-300 hover:bg-white/10'>
      <h1 className='text-2xl md:text-3xl font-bold pb-4 flex items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
        Conditions
      </h1>
      <div className='flex flex-col items-center justify-center gap-4 mt-2'>
        <img 
          src={iconUrl} 
          alt={text} 
          className='w-20 h-20' 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <span className='text-slate-200 text-center'>{text}</span>
      </div>
    </div>
  )
}

export default Conditions
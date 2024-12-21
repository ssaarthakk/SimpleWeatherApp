function Humidity({ humidity, windSpeed }: { humidity: number, windSpeed: number }) {
  return (
    <div className='text-2xl w-full bg-gray-200 p-6 rounded-md'>
      <h1 className='text-3xl font-bold pb-3'>Humidity and Wind Speed</h1>
      <div>Humidity: {humidity}%</div>
      <div>Wind Speed: {windSpeed} Km/Hr</div>
    </div>
  )
}

export default Humidity
import React from 'react'

function Temperature({ temperature, feelsLike }: { temperature: number, feelsLike: number }) {
  return (
    <div className='text-2xl w-full bg-gray-200 p-6 rounded-md flex flex-col'>
      <h1 className='text-3xl font-bold pb-3'>Temperature Details</h1>
      <span>Temperature: {temperature}&deg;C</span>
      <span>Feels Like: {feelsLike}&deg;C</span>
    </div>
  )
}

export default Temperature
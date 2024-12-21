import React from 'react'

function Conditions({ text, icon }: { text: string, icon: string }) {
  return (
    <div className='text-2xl w-full bg-gray-200 p-6 rounded-md flex flex-col'>
      <h1 className='text-3xl font-bold pb-3'>Weather Conditions</h1>
      <div className='flex flex-row items-center justify-between'>
        <span>{text}</span>
        <img src={icon} alt="weather icon" className='w-24' />
      </div>
    </div>
  )
}

export default Conditions
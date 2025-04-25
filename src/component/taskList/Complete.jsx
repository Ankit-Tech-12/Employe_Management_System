import React from 'react'

export const Complete = ({data}) => {
  return (
    <div>
        <li className='bg-green-500 -mt-3 z-2 list-none px-3 py-5 rounded-t-2xl'>
                <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>{data.category}</span><span>{data.date}</span></div>
                <p className='text-xl font-bold'>{data.title}</p>
                <p>{data.description}
                </p>
                <div className='mt-2'>
                <button className='w-full py-1 px-2 font-bold bg-green-600'>Complete</button>
                </div>
            </li>
    </div>
  )
}

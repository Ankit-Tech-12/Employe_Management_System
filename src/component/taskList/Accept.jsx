import React from 'react'

export const Accept = ({data}) => {
    return (
        <div>
            <li className='bg-orange-500 z-1 list-none px-3 py-5 rounded-t-2xl'>
                <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>{data.category}</span><span>{data.date}</span></div>
                <p className='text-xl font-bold'>{data.title}</p>
                <p>{data.description}
                </p>
                <div className="flex justify-between mt-4">
                    <button className='bg-green-400 py-1 px-2 text-sm'>mark as complete</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as fail</button>
                </div>
            </li>
        </div>
    )
}

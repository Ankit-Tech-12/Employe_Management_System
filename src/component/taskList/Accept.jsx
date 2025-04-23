import React from 'react'

export const Accept = () => {
    return (
        <div>
            <li className='bg-orange-500 z-1 list-none px-3 py-5 rounded-t-2xl'>
                <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>High</span><span>20 Feb 2024</span></div>
                <p className='text-xl font-bold'>Example 1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex justify-between mt-4">
                    <button className='bg-green-400 py-1 px-2 text-sm'>mark as complete</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as fail</button>
                </div>
            </li>
        </div>
    )
}

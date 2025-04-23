import React from 'react'

export const New = () => {
    return (
        <div>
            <li className='bg-green-500 -mt-3 z-2 list-none px-3 py-5 rounded-t-2xl'>
                <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>High</span><span>20 Feb 2024</span></div>
                <p className='text-xl font-bold'>Example 1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='mt-2'>
                <button className='w-full py-1 px-2 font-bold bg-green-600'>Accept Task</button>
                </div>
            </li>
        </div>
    )
}

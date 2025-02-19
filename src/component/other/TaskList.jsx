import React from 'react'

function TaskList() {
  return (
    <>
    <div>
                    <ul className='flex flex-col'>
                        <li className='bg-orange-500 z-1 list-none px-3 py-5 rounded-t-2xl'>
                            <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>High</span><span>20 Feb 2024</span></div>
                            <p className='text-xl font-bold'>Example 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className='bg-yellow-500 -mt-3 z-2 list-none px-3 py-5 rounded-t-2xl'>
                            <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>High</span><span>20 Feb 2024</span></div>
                            <p className='text-xl font-bold'>Example 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className='bg-blue-500 z-3 -mt-3 list-none px-3 py-5 rounded-t-2xl'>
                            <div className='flex flex-row justify-between font-bold text-sm'><span className='bg-red-600 py-1 px-2 rounded'>High</span><span>20 Feb 2024</span></div>
                            <p className='text-xl font-bold'>Example 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                    </ul>
                </div>
    </>
  )
}

export default TaskList
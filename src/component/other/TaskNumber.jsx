import React from 'react'

const TaskNumber = () => {
  return (
    <>
    <div className='flex flex-wrap justify-between my-4'>
                    <div className='task_info_size font-bold my-2 p-2 bg-blue-400 rounded'>
                        <span className='text-3xl'>0</span>
                        <p>New Task</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-green-400 rounded'>
                        <span className='text-3xl'>0</span>
                        <p>Completed</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-orange-400 rounded'>
                        <span className='text-3xl'>0</span>
                        <p>Accepted</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-red-400 rounded'>
                        <span className='text-3xl'>0</span>
                        <p>Failed</p>
                    </div>
                </div>
    </>
  )
}

export default TaskNumber
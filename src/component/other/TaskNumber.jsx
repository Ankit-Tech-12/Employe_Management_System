import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <>
    <div className='flex flex-wrap justify-between my-4'>
                    <div className='task_info_size font-bold my-2 p-2 bg-blue-400 rounded'>
                        <span className='text-3xl'>{data.newTasks}</span>
                        <p>New Task</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-green-400 rounded'>
                        <span className='text-3xl'>{data.completedTasks}</span>
                        <p>Completed</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-orange-400 rounded'>
                        <span className='text-3xl'>{data.activeTasks}</span>
                        <p>Accepted</p>
                    </div>
                    <div className='task_info_size font-bold my-2 p-2 bg-red-400 rounded'>
                        <span className='text-3xl'>{data.failedTasks}</span>
                        <p>Failed</p>
                    </div>
                </div>
    </>
  )
}

export default TaskNumber
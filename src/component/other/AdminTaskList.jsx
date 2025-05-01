import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AdminTaskList() {
  const authData=useContext(AuthContext);
  return (
    <div className='w-full mt-5'>
      <div className='bg-red-400 flex justify-between w-full rounded py-4 px-6'>
        <h3 className='text-lg font-medium w-1/5'>Employee</h3>
        <h5 className='text-lg font-medium w-1/5'>Active task</h5>
        <h5 className='text-lg font-medium w-1/5'>New Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>        
      </div>
      {authData.employees.map((elem,idx)=>{
        return <div key={idx} className='border-1 flex justify-between w-full rounded mt-2 py-4 px-6'>
        <h3 className='text-lg font-medium w-1/5'>{elem.firstName}</h3>
        <h5 className='text-lg font-medium w-1/5 text-orange-500'>{elem.activeTasks}</h5>
        <h5 className='text-lg font-medium w-1/5 text-blue-500'>{elem.newTasks}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-500'>{elem.completedTasks}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-500'>{elem.failedTasks}</h5>        
      </div>
      })}
    </div>
  )
}

export default AdminTaskList
import React from 'react'
import TaskNumber from '../other/TaskNumber'
import HeaderD from '../other/HeaderD'
import TaskList from '../other/TaskList'

const EmployeeD = () => {
    return (
        <>
            <div className='w-1/2 h-screen m-auto p-5 bg-[#1C1C1C]'>
                <HeaderD/>
                <TaskNumber/>
                <TaskList/>
            </div>
        </>
    )
}

export default EmployeeD
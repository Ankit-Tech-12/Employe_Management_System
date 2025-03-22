import React from 'react'
import TaskNumber from '../other/TaskNumber'
import HeaderD from '../other/HeaderD'
import TaskList from '../other/TaskList'

const EmployeeD = ({data}) => {
    console.log(data);
    return (
        <>
            <div className='w-1/2 h-screen m-auto p-5 bg-[#1C1C1C]'>
                <HeaderD data={data}/>
                <TaskNumber data={data}/>
                <TaskList data={data}/>
            </div>
        </>
    )
}

export default EmployeeD
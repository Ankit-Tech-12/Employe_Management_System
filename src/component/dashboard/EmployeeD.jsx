import React from 'react'
import TaskNumber from '../other/TaskNumber'
import HeaderD from '../other/HeaderD'
import TaskList from '../other/TaskList'

const EmployeeD = (props) => {
    // console.log(data);
    return (
        <>
            <div className='w-1/2 m-auto p-5 bg-[#1C1C1C]'>
                <HeaderD changeUser={props.changeUser} data={props.data}/>
                <TaskNumber data={props.data}/>
                <TaskList data={props.data}/>
            </div>
        </>
    )
}

export default EmployeeD
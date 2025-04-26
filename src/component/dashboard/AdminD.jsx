import React, { useState } from 'react'
import HeaderD from '../other/HeaderD'
import CreateTask from '../other/CreateTask';
import TaskList from '../other/TaskList';
import AdminTaskList from '../other/AdminTaskList';

function AdminD(props) {
  return (
    <>
    <div className='w-full p-8'>
        <HeaderD changeUser={props.changeUser}/>
        <CreateTask/>
        <AdminTaskList/>
    </div>
    </>
  )
}

export default AdminD
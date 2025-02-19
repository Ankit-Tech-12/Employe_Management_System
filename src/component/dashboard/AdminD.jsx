import React, { useState } from 'react'
import HeaderD from '../other/HeaderD'
import CreateTask from '../other/CreateTask';
import TaskList from '../other/TaskList';
import AdminTaskList from '../other/AdminTaskList';

function AdminD() {
  return (
    <>
    <div className='h-screen w-full p-8'>
        <HeaderD/>
        <div className='flex justify-between'>
        <CreateTask/>
        <AdminTaskList/>
        </div>
    </div>
    </>
  )
}

export default AdminD
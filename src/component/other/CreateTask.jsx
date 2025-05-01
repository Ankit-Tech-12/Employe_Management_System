import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
function CreateTask() {
  // const authData=useContext(AuthContext);
  const {employees,refreshUserData}=useContext(AuthContext);
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("");
  const[assign,setAssign]=useState("");
  const[category,setCategory]=useState("");
  const[date,setDate]=useState("");
  const[task,setTask]=useState({})
  const formhandling=(e)=>{
    e.preventDefault();
    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };
    setTask(newTask);
    const data=JSON.parse(localStorage.getItem("employees"))
    data.forEach(function(elem){
      if(assign==elem.firstName){
        elem.tasks.push(newTask);
        elem.newTasks=elem.newTasks+1;
        elem.taskCount=elem.taskCount+1;
        console.log(elem);
      }
    });
    // console.log(data)
    localStorage.setItem("employees",JSON.stringify(data))
    refreshUserData();
    setTitle("");
    setAssign("");
    setCategory("");
    setDescription("");
    setDate("");
  }
  return (
    <>
            <form className='Create_task w-full pb-5 pt-2 px-5 bg-[#1C1C1C]' onSubmit={(e)=>{
                  formhandling(e);
                }} >
                <h3 className='text-xl font-bold mb-10'>Create Task</h3>
                <div className='flex justify-between'>
                <div className='w-[45%]'>
                <label htmlFor="title">Task Title</label>
                <input required id='title' name='task_title' className='px-2 w-full' type="text" placeholder='Make UI desgin' value={title} onChange={(e)=>{
                  setTitle(e.target.value)
                }}/>
                <label htmlFor="date">Date</label>
                <input required className='w-full' id='date' name='date' type="date" value={date} onChange={(e)=>{
                  setDate(e.target.value)
                }}/>
                <label htmlFor="assign">Assign to</label>
                <input required className='w-full' id='assign' name='assign' type="text" value={assign} onChange={(e)=>{
                  setAssign(e.target.value)
                }}/>
                <label htmlFor="category">Category</label>
                <input required type="text" className='w-full' name="category" id="category" placeholder='Design,development,etc' value={category} onChange={(e)=>{
                  setCategory(e.target.value)
                }}/>
                </div>
                <div className='w-[45%]'>
                <label htmlFor="description">Description</label>
                <textarea className='w-full' rows={8} maxLength={500} placeholder='Detail description of task' name="description" id="description" value={description} onChange={(e)=>{
                  setDescription(e.target.value)
                }}></textarea>
                <button type='submit' className='w-full h-13 font-bold bg-green-500'>Create task</button>
                </div>
                </div>
            </form>
    </>
  )
}

export default CreateTask
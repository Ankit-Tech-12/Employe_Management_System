import React, { useState } from 'react'
function CreateTask() {
    const[task,setTask]=useState("");
  const[desc,setDesc]=useState("");
  const[assign,setAssign]=useState("");
  const[category,setCategory]=useState("");
  const formhandling=(e)=>{
    e.preventDefault();
    setTask("");
    setAssign("");
    setCategory("");
    setDesc("");
    console.log("Created");
  }
  return (
    <>
            <form className='Create_task w-[55%] h-screen pt-2 px-5 bg-[#1C1C1C]' onSubmit={(e)=>{
                  formhandling(e);
                }} >
                <h3 className='text-xl font-bold mb-10'>Create Task</h3>
                <label htmlFor="title">Task Title</label>
                <input required id='title' name='task_title' className='px-2 w-full' type="text" placeholder='Make UI desgin' value={task} onChange={(e)=>{
                  setTask(e.target.value)
                }}/>
                <label htmlFor="description">Description</label>
                <textarea className='w-full' rows={3} maxLength={500} placeholder='Detail description of task' name="description" id="description" value={desc} onChange={(e)=>{
                  setDesc(e.target.value)
                }}></textarea>
                <label htmlFor="date">Date</label>
                <input required className='w-full' id='date' name='date' type="date"/>
                <label htmlFor="assign">Assign to</label>
                <input required className='w-full' id='assign' name='assign' type="text" value={assign} onChange={(e)=>{
                  setAssign(e.target.value)
                }}/>
                <label htmlFor="category">Category</label>
                <input required type="text" className='w-full' name="category" id="category" placeholder='Design,development,etc' value={category} onChange={(e)=>{
                  setCategory(e.target.value)
                }}/>
                <button type='submit' className='w-full font-bold bg-black'>Create task</button>
            </form>
    </>
  )
}

export default CreateTask
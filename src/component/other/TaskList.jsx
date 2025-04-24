import React from 'react'
import { Accept } from '../taskList/Accept'
import { Complete } from '../taskList/Complete'
import {New} from '../taskList/New'
import {Fail} from '../taskList/Fail'
function TaskList({data}) {
  return (
    <>
    <div>
                    <ul className='flex flex-col'>
                        {data.tasks.map((elem,idx)=>{
                            if(elem.active){
                               return <Accept key={idx}/>
                            }
                            if(elem.newTask){
                               return  <New key={idx}/>
                            }
                            if(elem.completed){
                               return <Complete key={idx}/>
                            }
                            if(elem.failed){
                               return <Fail key={idx}/>
                            }
                        })
                        }
                    </ul>
                </div>
    </>
  )
}

export default TaskList
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
                        {data.tasks.map((elem)=>{
                            if(elem.active){
                               return <Accept/>
                            }
                            if(elem.newTask){
                               return  <New/>
                            }
                            if(elem.completed){
                               return <Complete/>
                            }
                            if(elem.failed){
                               return <Fail/>
                            }
                        })
                        }
                    </ul>
                </div>
    </>
  )
}

export default TaskList
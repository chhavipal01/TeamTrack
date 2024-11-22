import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist'
    className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full  flex-nowrap py-5 mt-10'>
 
         <AcceptTask />

         <NewTask />

        



         <CompleteTask/>
       

         <FailedTask/>



       
     








       
    </div>
  )
}

export default TaskList
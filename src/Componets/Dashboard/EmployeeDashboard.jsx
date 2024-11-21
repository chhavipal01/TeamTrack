import React from 'react'
import Header from '../Other/Header'
import TaskListNum from '../Other/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >
      <Header data={props.data}/>
      <TaskListNum data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
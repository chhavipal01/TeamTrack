import React from 'react'
import Header from '../Other/Header'
import TaskListNum from '../Other/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >
      <Header/>
      <TaskListNum/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
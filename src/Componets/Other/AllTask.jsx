import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
   
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 overflow-auto'>
      <div className='bg-blue-400  mb-2 py-2 px-4 flex justify-between rounded '>
            <h2>Employee Name</h2>
            <h3>New Task</h3>
            <h5>Active Task</h5>
            <h3>Completed Task</h3>
            <h5>Failed Task</h5>
         </div>



         {authData.employees.map((elem)=>{

            return <div className='bg-blue-400  mb-2 py-2 px-4 flex justify-between rounded '>
            <h2>{elem.firstname}</h2>
            <h3>{}</h3>
            <h5>Status</h5>
        </div>
         })}
       

       
    </div>
  )
}

export default AllTask
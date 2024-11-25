import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData]= useContext(AuthContext)
   
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 '>
      <div className='bg-gray-400 mb-2 py-2 px-4 flex justify-between rounded '>
            
            <h3 className='w-1/5 text-lg font-medium'>Employee Name</h3>
            <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
            <h3 className='w-1/5 text-lg font-medium'>Active Task</h3>
            <h3 className='w-1/5 text-lg font-medium'>Completed </h3>
            <h3 className='w-1/5 text-lg font-medium'>Failed Task</h3>
         </div>

         <div className=''>
        {userData.employees.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5'>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumber.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumber.completion}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
 
     
  )
}

export default AllTask
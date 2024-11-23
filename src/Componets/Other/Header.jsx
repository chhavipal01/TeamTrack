import { useState } from "react"
import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'


 const Header = ({data}) => {

//   const [username,setUsename] = useState('')

//   if(!data){
//     setUsename('Admin')
//   }else{
//     setUsename(data.firstname)
//   }


    const logOutUser= ()=>{
      localStorage.setItem('loggedInUser','')
      window.location.reload()
    }

  return (
    <div className=' flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br/> <span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
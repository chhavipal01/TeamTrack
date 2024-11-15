import React, { useEffect } from 'react'
import Login from './Componets/Auth/Login';
import EmployeeDashboard from './Componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';


const App = () => {


  useEffect(() => {
    //setLocalStorage()
    getLocalStorage()
  
    
  },)
  
  return (
    <>
     <Login/> 
    {/* <EmployeeDashboard /> */}
  
      {/*  <AdminDashboard/> */}
   
    </>
  )
}

export default App;
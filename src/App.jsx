import React, { useEffect , useState } from 'react'
import Login from './Componets/Auth/Login';
import EmployeeDashboard from './Componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componets/Dashboard/AdminDashboard'


const App = () => {
   

  const [user,setUser] = useState(null)

const handleLogin= (email,password)=>{
   if(email =='admin@me.com' && password == '123'){
    console.log("this is Admin")
   }else if(email== 'user@me,com ' && password == '123'){
     console.log("this is user")
   }
   else{
    alert("Invalid  Crendentials")
   }
}


  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: '' }
    {/* <EmployeeDashboard /> */}
  
      {/*  <AdminDashboard/> */}
   
    </>
  )
}

export default App;
import React, { useContext, useEffect , useState } from 'react'
import Login from './Componets/Auth/Login';
import EmployeeDashboard from './Componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componets/Dashboard/AdminDashboard'
import {AuthContext} from './Context/AuthProvider'


const App = () => {

  const [user, setUser]= useState(null)

  const authData= useContext(AuthContext)
   
  useEffect(() => {
    first
  
    
  }, [third])
   

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      
    } else if (authData && authData.employees.find((e)=>email==e.email && password == e.password)) {
      setUser('employees');
      
    } else {
      alert('Invalid Credentials');
    }
  };

 const data= useContext(AuthContext)
 console.log(data)
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: '' }
      {user=== 'admin'? <AdminDashboard/> : <EmployeeDashboard />}
   
   
    </>
  )
}

export default App;
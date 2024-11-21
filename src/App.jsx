import React, { useContext, useEffect , useState } from 'react'
import Login from './Componets/Auth/Login';
import EmployeeDashboard from './Componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componets/Dashboard/AdminDashboard'
import {AuthContext} from './Context/AuthProvider'


const App = () => {

  const [user, setUser]= useState(null)
  const [loggedInUserData, setLoggedInUserData]= useState(null)

  const authData= useContext(AuthContext)
   
  useEffect(() => {
      if(authData){
        const loggedInUser = localStorage.getItem("loggedInUser")
        if(loggedInUser){
          setUser(loggedInUser.role)
        }
      }
  
    
  }, [authData])
   

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password =='123') {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'})) 
    } else if (authData?.employees){
      const employee= authData.employees.find((e)=>email==e.email && password == e.password)
       if(employee){
        setUser('employees');
        setLoggedInUserData(employee)
       localStorage.setItem('loggedInUser',JSON.stringify({role:'employees'}))
       }else{
        alert('Invalid Credentials');
    }
    }else{
      alert('invalid Credentials')
    }
  };

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: '' }
      {user== 'admin'? <AdminDashboard/> : (user == 'employees' ? <EmployeeDashboard  data={loggedInUserData}/>: null )}
   
   
    </>
  )
}

export default App;
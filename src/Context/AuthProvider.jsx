import React, { createContext } from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider value={"chhavi"} >
        {children}
        </AuthContext.Provider>      
      </div>
  )
}

export default AuthProvider
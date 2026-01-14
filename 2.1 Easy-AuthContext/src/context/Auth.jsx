import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext(null)
function AuthProvider({ children }) {
     console.log(children)
    const [user, setUser] = useState('');
    const[isloggedIn,setIsLoggedIn]=useState(false);
    const[theme,setTheme]=useState('light');
  return (
    <AuthContext.Provider value={{ user, setUser, theme, setTheme ,isloggedIn,setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
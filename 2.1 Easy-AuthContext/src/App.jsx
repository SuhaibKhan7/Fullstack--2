import React from 'react'
import Header from './component/Header'
import AuthProvider, { AuthContext } from './context/Auth'
import { useContext } from 'react'
import './App.css'
export default function App() {
  const { theme } = useContext(AuthContext);
  console.log(theme);
  return ( 
    <>
        <div className={theme}>
          <Header/>
        </div>

      
      </>
  ) 
}

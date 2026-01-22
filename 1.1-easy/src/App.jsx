import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function App() {
const[counter,setcounter]=useState(10)
 
  function inc() {
    setcounter(counter + 1)
    
  }
  useEffect(() => {
  console.log("hi")
},[counter])

  return (
    <div>
      {counter}
      <button onClick={inc}>+</button>
    </div>
  )
}

export default App
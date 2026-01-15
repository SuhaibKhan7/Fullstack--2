import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function App() {
  const[user,setUser]=useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data)
      setUser(data)
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>User List ....</h1>
      <ol>
        {user.map((u) => (
          <li>{ u.name}</li>
      ) )}

      </ol>
    </div>
  )
}

export default App
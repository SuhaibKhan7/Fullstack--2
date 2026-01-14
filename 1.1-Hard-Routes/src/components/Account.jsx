import React from 'react'
import { Link, Outlet } from 'react-router'

function Account() {
  return (
      <div>
          <h1>Account Page</h1>
          <Link to="/">Go to Home</Link>
          <Link to="/about">Go to About</Link>
          <Outlet />
      </div>
  )
}

export default Account
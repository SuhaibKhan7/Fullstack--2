import React,{useState} from 'react'
import useForm from './useForm'

function Signup() {
    const { formData, handleChange, handleSubmit } = useForm()
  return (
      <div>
          <h1>Signup Page</h1>
          <hr />
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" name='username' value={formData.username } onChange={handleChange} />
              <br /><br />
              <input type="email" placeholder="Email" name='email' value={formData.email }  onChange={handleChange}/>
              <br /><br />
              <input type="password" placeholder="Password" name='password' value={formData.password}  onChange={handleChange}/>
              <br /><br />
              <button type="submit">Signup</button>
      </form>   
      </div>
  )
}
export default Signup
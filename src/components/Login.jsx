import React from 'react'
import { Link } from 'react-router-dom'
const  Login = () => {
  return (
    <div className='container'>
      <h1>Login </h1>
      <form action="">
        
        <input type="text" placeholder='User name'/>
        <input type="password" placeholder='Password' />
        
      </form>
     <div className="recover-password">
        <a href="#">Forgot password</a>
     </div>
      <button>Login</button>
      <div className="member">
        {/* Don't have an account? <Link to='/register'>Register</Link> */}
         Don't have an account? <Link to='/'>Register</Link>
      </div>
    </div>
  )
}

export default Login

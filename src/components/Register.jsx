import React from 'react'
import {Link} from 'react-router-dom'

const  Register = () => {
  return (
    <div className='container'>
      <h1>Register </h1>
      <form action="">
        <input type="text" placeholder='Full name' />
        <input type="text" placeholder='User name'/>
        <input type="password" placeholder='Password' />
        <input type="Password" placeholder='Re-Enter Password'/>
        <input type="email" placeholder='Email address'/>
        <input type="tel" placeholder='Phone Number'/>
      </form>
      <div className='terms'>
        <input type="checkbox" id='checkbox' />
        <label htmlFor="checkbox"> I agree to the <a href="#">Terms and conditions</a></label>
      </div>
      <button>Register</button>
      <div className="member">
        {/* Already have an account? <Link to='/login'>Login</Link> */}
         Already have an account? <Link to='/'>Login</Link>
      </div>
    </div>
  )
}

export default Register

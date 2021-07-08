import React from 'react'

function UserLogin() {
  return (
    <div>
    <h2 className="login">Log In</h2>
    <form action="">
    <ul>
        <li><label htmlFor="email" className="logEmail">Email:</label>
        <input type="email" name="email" className="logEmail" placeholder="Enter your Email"  /></li>
        <li><label htmlFor="password" className="logPassword">Password:</label>
        <input type="text" name="password" className="logPassword" placeholder="Enter your Password" /></li>
        <button type="submit" className="logBtn">Log In</button>
    </ul>
    </form>
    <a href="#" className="forget">Forget Password?</a>
    <span className="account">Don't have account? create one <a href="#">Register</a></span>
      
    </div>
  )
}

export default UserLogin

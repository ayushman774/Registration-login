import React from 'react'

function Userregistration() {
  return (
    <div>
    <h2 className="registration">Registration</h2>
      <form action="">
      <ul>
          <li><label htmlFor="usernamme" className="username">Username</label>
          <input type="text" name="name" className="username" placeholder=" Enter your Name" /></li>
          <li><label htmlFor="contact" className="contact">Contact</label>
          <input type="number" name="contact" className="contact" placeholder=" Enter your Phone No." /></li>
          <li><label htmlFor="email" className="email">Email</label>
          <input type="email" name="email" className="email" placeholder="Enter your Email" /></li>
          <li><label htmlFor="password" className="password">Create Password</label>
          <input type="text" name="password" className="password" placeholder="Create your Password" /></li>
          </ul>
          <button type="submit" className="regBtn">Submit</button>
      </form>
      <span className="already">Already a user? Log In </span>
    </div>
  )
}

export default Userregistration

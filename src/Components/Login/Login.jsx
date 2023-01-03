import React from "react";
import './login.css'

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginCard">
   <div className="login_heading">
  <h2>Login</h2>
  </div>

  <div className="login_form">
  <form >
    
    <label htmlFor="username">Username</label> <br />
    <input type="text" className="username" name="username" placeholder="Enter your name" ></input> <br />  <br />
 
    <label htmlFor="email">Email</label> <span></span> <br />
    <input type="email" className="email" name="email" placeholder="Enter your Email address" ></input> <br /><br />

    <label htmlFor="Password">Password</label> <span></span> <br />
    <input type="password" className="password" name="password" placeholder="Enter your Password" ></input> <br /><br />
   
    <input type="submit" className="login" value="Login" />
   
  </form>
  </div>

  </div>


</div>
  )
}

export default Login;
import React from "react";
import "./register.css"

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerCard">
   <div className="register_heading">
  <h2>Register</h2>
  </div>

  <div className="login_form">
  <form >
    
    <label htmlFor="username">Username</label> <br />
    <input type="text" className="username" name="username" placeholder="Enter your name" ></input> <br />  <br />
 
    <label htmlFor="email">Email</label> <span></span> <br />
    <input type="email" className="email" name="email" placeholder="Enter your Email address" ></input> <br /><br />

    <label htmlFor="Phone number">Phone Number</label> <span></span> <br />
    <input type="text" className="phonenumber" name="number" placeholder="Enter your Phone Number" ></input> <br /><br />

    <label htmlFor="Password">Password</label> <span></span> <br />
    <input type="password" className="password" name="password" placeholder="Enter your Password" ></input> <br /><br />
    
 
    <label htmlFor="Password">Confirm Password</label> <span></span> <br />
    <input type="password" className="cpassword" name="password" placeholder="Confirm password" ></input> <br /><br />
    
  
    <input type="submit" className="login" value="Register" />
   
  </form>
  </div>

  </div>


</div>
  );
}

export default Register;

import "../Sinin/Singin.css"

import image from  "./Assets/left.png"
import logo from "./Assets/google.svg"

import { Link } from "react-router-dom"


const Singin = () => {
  return (
    <div>

<div className="signin">
      <div className="leftside">
        <div className="box">
            <img src={image} alt="" />
            </div>
      </div>

<div className="right">
<h2>Sign In to your Account</h2>
<p>Welcome back! please enter your detail</p>

<div className="form">
    <input type="Email"placeholder='Email' />
    <input type="Password"placeholder='Password' />
    <p>Forgot Password?</p>
    <Link to = "/homepage"> <button className="signIn"> Sign in</button></Link>
   
</div>
<div className="info">
    <p>or sign in with mobile number</p>
    <div className="box2">
        <img src={logo}alt="" />
        <h3>sign in with Google</h3>
        </div>
        <div className="dont">
        <p>Don't have an account? 
          <Link to = "/signup">
          <button className="sign">Sign up</button> 
          </Link>
          
        
        </p>
        </div>
       
        
    </div>
</div>

      </div>



    </div>

  )

}

export default Singin
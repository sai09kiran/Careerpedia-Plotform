
import "../Sinup/Singup.css"

import photo from "./Asstes/left.png"

import logo from "./Asstes/google.svg"

import { Link } from "react-router-dom"

const Singup = () => {
  return (
    <>

<div className="Logoutpage">
   
   <div className="lh">
    <img src={photo} alt="" />
   </div>


<div className="rh">
<h2>Sign Up for an Account</h2>

<div className="table">
   <div className="table2">
   <input type="Name"placeholder='First-Name'  />
   <input type="LAst-Name" placeholder='Last-Name' />
   </div>
  <input type="Email"placeholder='Email' className="email"/>
  <input type="password"placeholder='password'  className="email"/>

</div>
<div className="check">
<input type="checkbox" name=" " id="" />
<p>By creating an account means you agree to the Terms
& Conditions and our Privacy Policy</p>
</div>
<Link to ="/signin">
<button className="signUP">Sign up</button>
</Link>


<div className="bottom">

    <p>or sign up with</p>
    <div className="box5">
        <img src={logo}alt="" />
        <h3>sign in with Google</h3>
        </div>
        <div className="up">
        <p>A have an account? 
          <Link to="/signin">

          <button className="inn">
          Sign in
          </button>
          </Link>
         
          </p>
        </div>
       
   
</div>



</div>

    </div>


    </>
  )

}

export default Singup
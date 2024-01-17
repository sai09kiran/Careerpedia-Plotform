import React from '../StudentProfle/Student.css'

import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

import icon from "./Assets/Icon.png"
import medal from "./Assets/medal 1.png"
import she from "./Assets/she1.png"


import contents from "./Assets/Content.png"

const Student = () => {
  return (
    <>
    
    <div className="bars">
<Sidebar/>

<div className="middlecontainer">
<Navbar/>

    
    <div className="studentprofile">
   
<div className="studentleft">

<img src={icon} alt="" />

<p>Upload Your Image</p>

<div className="primary">
<img src={medal} alt="" />
<p>3,963</p>
<img src={she} alt="" />
<p>Primary level</p>

</div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div className="personalinfo">

  <div className="img">

 <img src={contents} alt="" />
 <img src={contents} alt="" />
 <img src={contents} alt="" />
 <img src={contents} alt="" />

  </div>

<div className="information">

  <div className="info1">
  <h2>Personal Information</h2>
  <p>Lorem consectetur adipiscing elit.</p>
  </div>

<div className="info2">
  <h2>Contact Details</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</div>

<div className="info3">
  <h2>Education Details</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</div>

<div className="info4">
  <h2>Work Experience</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</div>





</div>

</div>


</div>


<div className="studentright">

<h2>Personal Details</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

<form>

<div className="name">
<label htmlFor="Name">Name</label>
<input type="text"placeholder='Name' />
</div>

<div className="name">
<label htmlFor="Name">Last Name</label>
<input type="text"placeholder='LastName' />
</div>

<div className="name">
<label htmlFor="email">Email</label>
<input type="email"placeholder='Email' />
</div>

<div className="name">
<label htmlFor="Date">Date</label>
<input type="date"placeholder='09\10\2000' />
</div>

<div className="name">
<label htmlFor="Name">Redister Your Number</label>
<input type="tel"placeholder='Phone Number' />
</div>

<div className="name">
<label htmlFor="Name">Linked Profile</label>
<input type="text"placeholder='Linked' />
</div>


</form>

<h2>Contact Details</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.</p>

<form>
<div className="name">
<label htmlFor="Name">Address Line</label>
<input type="text"placeholder='Address' />
</div>

<div className="name">
<label htmlFor="Name">City</label>
<input type="text"placeholder='City' />
</div>

<div className="name">
<label htmlFor="Name">Distric</label>
<input type="text"placeholder='Distric' />
</div>

<div className="name">
<label htmlFor="Name">State</label>
<input type="text"placeholder='State' />
</div>

<div className="name">
<label htmlFor="Name">Pin Code</label>
<input type="text"placeholder='Pin Code' />
</div>

<div className="name">
<label htmlFor="Name">Country</label>
<input type="text"placeholder='Country' />
</div>


</form>

<h2>Education Details</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quae!</p>

<form>


<div className="name">
<label htmlFor="Name"></label>
<input type="text"placeholder='college' />
</div>

<div className="name">
<label htmlFor="Name"></label>
<input type="text"placeholder='Degree' />
</div>
</form>




</div>


    </div>
    

    </div>

    </div>
    
    
    </>
  )
}

export default Student
import React from 'react'

import "../Sidebar/Sidebar.css"

import Dashboard from "./../../Pages/Dashboard/Dashboard"
import English from '../../Pages/English/English'
import Logical from "../../Pages/Logical/Logical"


import img from "./Assets/Group.png"

import she from "./Assets/Image.png"
import medal from "./Assets/medal 1.png"
import prize from "./Assets/she1.png"
import Csep from '../../Pages/CSEP/Csep'
import Csap from '../../Pages/CSAP/Csap'
import Job from '../../Pages/Job/Job'
import Refer from '../../Pages/Refer/Refer'
import Support from '../../Pages/Support/Support'
import Inter from '../../Pages/Inter/Inter'
import Logout from '../../Pages/Logout/Logout'

// import Eng from '../../Pages/English/English'

const Sidebar = () => {
  return (
    <>

<div className="Sidecontainer">

<img src={img} alt="" />

<div className="shebox">
    <div className="shename">
        <img src={she} alt="" />
        <h2>Katie Pena</h2>
    </div>
    <div className="prize">
        <img src={medal} alt="" />
        <p>3,963</p>
        <img src={prize} alt="" />
        <p>Primary level</p>
    </div>
</div>


<div className="sections">

<Dashboard/>
<English/>
<Logical/>
<Csep/>
<Csap/>
<Job/>
<Refer/>
<Support/>
<Inter/>
<Logout />

</div>

</div>




    </>
  )
}

export default Sidebar
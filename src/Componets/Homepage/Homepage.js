import React from 'react'

import "../Homepage/Homepage.css"

import Sidebar from '../Sidebar/Sidebar'

import Navbar from '../Navbar/Navbar'

import Middle from '../Middlecontent/Middle'



const Homepage = () => {
  return (
    <>
<div className="bars">
<Sidebar/>

<div  className='midle'> 
<Navbar/>
<Middle/>
  
</div>




</div>


    </>
  )
}

export default Homepage
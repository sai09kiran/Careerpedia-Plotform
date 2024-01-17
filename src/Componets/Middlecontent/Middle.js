import React from 'react'
import './Middle.css'

import Head from '../Mainbar/Head/Head.js'
import Hero from '../Mainbar/Hero/Hero.js'
import Graphic from '../Mainbar/Graphic/Graphic.js'
import Graph from '../Mainbar/Graphmui/Graph.js'

import SidebarRight from "../SidebarRight/SidebarRight.js"
const Middle = () => {
  return (
    <>


<div className="midlecontainers">

<div className=' middle'>
  <Head/>
  <Hero/>
  <Graphic/>
  <Graph/>

</div>

<div className="rightbar">

<SidebarRight/>

</div>

</div>


    </>
  )
}

export default Middle
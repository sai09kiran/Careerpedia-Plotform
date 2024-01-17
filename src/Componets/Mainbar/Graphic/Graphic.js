
import React from '../Graphic/Graphic.css'

import logo from './Assets/Vector.png'


const datainfo=[

{
    id:"1",
    name:"1.1 Profit and loss",
    points:"2 point",
    img:logo,
    min :"15 min",
},

{
    id:"2",
    name:"1.2 Speed, Distance and Time",
    points:"2 point",
    img:logo,
    min :"12 min",
},

{
    id:"3",
    name:"1.3 Ratio and Proportion",
    points:"2 point",
    img:logo,
    min :"18 min",
},

{
    id:"4",
    name:"1.4 Profits",
    points:"2point",
    img:logo,
    min :"20 min",
},

{
    id:"5",
    name:"1.5 time",
    points:"2point",
    img:logo,
    min :"25 min",
},

{
    id:"6",
    name:"1.5 Ratio",
    points:"2point",
    img:logo,
    min :"30 min",
},

]


const Graphic = () => {
  

  return (
    <>

<div className="graphic">

<h1>Graphic Design</h1>

<div className="graphicinfo">
    <h2>Introduction to Graphic Design</h2>
    <p>This module provides an overview of the course and a review of the main tools used in descriptive statistics to visualize inform</p>
</div>

<div className="graphiccontent">
  {
      datainfo.map((item) => (
        
        <div className ="points" key={item.id}>
       <p>{item.name}</p>
       
      
         
         <div className= "pointsloss">

         <p>{item.points}</p>
           <img src = {item.img} />
           <p>{item.min}</p>
         </div>
          

        </div>

      ))
  }

 

</div>


</div>





    </>
  )
}

export default Graphic
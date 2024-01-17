import React from '../SidebarRight/SidebarRight.css'

import she from "./Assets/she1.png"
import leyu from "./Assets/leyu.png"

import pass from "./Assets/pass.png"
import puzzle from "./Assets/puzzle.png"
import phy from "./Assets/phy.png"
import book from "./Assets/book1.png"

import men from "./Assets/men.png"

const img =[

{
    id:1,
    img:leyu,
},

{
    id:2,
    img:leyu,
},

{
    id:3,
    img:leyu,
},

{
    id:4,
    img:leyu,
},

{
    id:5,
    img:leyu,
},

{
    id:6,
    img:leyu,
},

{
    id:7,
    img:leyu,
},

{
    id:8,
    img:leyu,
},

{
    id:9,
    img:leyu,
},

{
    id:10,
    img:leyu,
},

{
    id:11,
    img:leyu,
},




]




const SidebarRight = () => {
  return (

    <>
<div className="Rightcontainer">

<div className="Zerohero">
{/* <h2>Zero to Hero</h2> */}
<img src={she} alt="" />
{

img.map((item)=>(
<div className="image" key ={item.id}>
<img src={item.img} alt="" />
</div>

))

}

</div>


<div className="levelbox">
<h2>Level-1</h2>
<img src={she} alt="" />
<p>Primary Level</p>

<div className="levelboxinfo">

 <div className="level1">
<img src={pass} alt="" />
<p>150</p>
 </div>

 <div className="level2">
<img src={puzzle} alt="" />
<p>250</p>
 </div>

 <div className="level3">
<img src={phy} alt="" />
<p>300</p>
 </div>

 <div className="level4">
<img src={book} alt="" />
<p>300</p>
 </div>

</div>


</div>


<div className="bookslot">
    <h2>BOOK A SLOT</h2>
    <img src={she} alt="" className="slotimg" />
    <p>You want to level check your skill and eligibility by attending interview</p>
    <button className="slot">Book Slot</button>
</div>

<div className="career">
<h2>careerpedia</h2>
<img src={men} alt="" />
<button className="upgrad">Upgrade</button>

</div>








</div>

    </>

  )

}

export default SidebarRight
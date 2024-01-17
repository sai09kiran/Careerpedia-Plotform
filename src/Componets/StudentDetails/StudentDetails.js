import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import React from '../StudentDetails/StudentDetails.css'

import image from "./Assets/Image.png"
import phn from "./Assets/telephone 1.png"
import emil from "./Assets/email 1.png"
import pen from "./Assets/pen.png"
import uni from "./Assets/uni.png"
import inn from "./Assets/Inner.png"

const info=[

{
    id:1,
    name:"Bachelors in Science (BSc)",
    course:"Computer Engineering",
    uni:uni,
    univer:"Harvard University, Cambridge",
    cgp:"3.71GPA",
    inn:inn,
    date:"2019-2023",
},

{
  id:1,
  name:"Bachelors in Science (BSc)",
  course:"Computer Engineering",
  uni:uni,
  univer:"Harvard University, Cambridge",
  cgp:"3.71GPA",
  inn:inn,
  date:"2019-2023",
},

{
  id:1,
  name:"Bachelors in Science (BSc)",
  course:"Computer Engineering",
  uni:uni,
  univer:"Harvard University, Cambridge",
  cgp:"3.71GPA",
  inn:inn,
  date:"2019-2023",
},

]

const data=[

{
  id:2,
  name:"Apple",
  info:"Software Developer",
  ym:"2Y 6M",
  start:"Start : 01/01/2021",
  end:"End : 31/07/2023",
},

{
  id:2,
  name:"Apple",
  info:"Software Developer",
  ym:"2Y 6M",
  start:"Start : 01/01/2021",
  end:"End : 31/07/2023",
},

{
  id:2,
  name:"Apple",
  info:"Software Developer",
  ym:"2Y 6M",
  start:"Start : 01/01/2021",
  end:"End : 31/07/2023",
},

]





const StudentDetails = () => {
  return (
    <>
    
    <div className="bar">
        <Sidebar/>
   
    
   <div className="middlecontainer">
    <Navbar/>
   
    
<div className="details">
   <div className="she">


    <img src={image} alt=""  />
    
<div className="phn">
<h1>Katie Pena</h1>
     <div className="phn2">
     <img src={phn} alt="" />
    <p>91-9440720445</p>
    <img src={emil} alt="" />
    <p>katiepena@gmail.com</p>
     </div>
  
</div>
</div>
<div className="pen">
<img src={pen} alt="" />
<h6>Change Password</h6>
</div>

<div className="pena">

</div>


</div>


<div className="education">
<h2>Education Details</h2>

<div className="educationdetails">

{
  info.map((item)=>(
     <div className="maine" key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.course}</p>

      <div className="university">
        <img src={item.uni} alt="" />
        <p>{item.univer}</p>
      </div>
     
     <div className="gpc">
      <h2>{item.cgp}</h2>

      <div className="gpc2">
      <img src={item.inn} alt="" />
      <p>{item.date}</p>
      </div>
    
     </div>

     </div>
      
  ))
}

</div>


<div className="experiance">

<h2>Experience Details</h2>

<div className="experiancedetails">
  {
    data.map((item)=>(
      <div className="maine2" key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.info}</p>

        <div className="ym">
          <h2>{item.ym}</h2>
          <div className="ym2">
            <p>{item.start}</p>
            <p>{item.end}</p>
          </div>
        </div>
      </div>

    ))


  }
</div>



</div>








</div>






</div>

    
    </div>
    
    
    
    
    
    </>
  )
}

export default StudentDetails
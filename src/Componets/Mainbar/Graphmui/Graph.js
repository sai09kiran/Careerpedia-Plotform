
import React from '../Graphmui/Graph.css'

import Chart1 from "../Graphmui/Chart1"
import Chart2 from "../Graphmui/Chart2"


const Graph = () => {
  return (
    <>

  <div className="graph">
    
    <div className="english">

<div className="englishhed">
    <h2>English & Logical Reasoning</h2>

    <div className="englishmonth">
        <p className="yellow">Monthly</p>
        <p>Weekly</p>
    </div>

<Chart1/>
</div>

</div>

<div className="upskill">

<div className="uphead">
    <h2>Upskilling UI / UX Course</h2>

    <div className="upheadmonth">
    <p className="yellow">Monthly</p>
        <p>Weekly</p>
    </div>

</div>
    
<Chart2/>

</div>




 
    
    
    
    
    
    
    
    
    
    
    
    
    </div> 



    </>
  )

}


export default Graph

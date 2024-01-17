
import './App.css';

import Homepage from './Componets/Homepage/Homepage';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Singin from './Componets/Sinin/Singin';
import Singup from './Componets/Sinup/Singup';

import Student from './Componets/StudentProfle/Student.js';
import StudentDetails from './Componets/StudentDetails/StudentDetails.js';


function App() {
  return (
    <>
    
    {/* <Homepage/> */}
   
    <Router>
    <Routes>
<Route path='/signin'element ={<Singin/>}/>
<Route path='/signup' element ={<Singup/>}/>
<Route path='/homepage' element ={<Homepage/>}/>
<Route path='/studentproflie' element ={<Student/>}/>
<Route path='/studentdetails' element ={<StudentDetails/>}/>
   </Routes>


    </Router>
    
    
    
    
    
    </>
  );
}

export default App;

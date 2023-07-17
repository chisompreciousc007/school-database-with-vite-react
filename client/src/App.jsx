// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import House from "./components/House"
import CollapsibleNavBar from './components/collapsibleNavBar';
import Home from './components/home';
import Students from './components/Students';
import Homeheader from './components/Homeheader';
import Teachers from './components/Teachers';
import RegisterStudent from './components/Registerstudents';
import RegisterTeacher from './components/Registerteachers';
import UpdateStudent from './components/Updatestudent';
import UpdateTeacher from './components/Updateteacher';



function App() {
  return (
    <Router>
      <div className="container-fluid">
      <Homeheader/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portal" exact element={<CollapsibleNavBar/>} />
          <Route path="/students" exact element={<Students/>} />
          <Route path="/teachers" exact element={<Teachers/>} />
          <Route path="/students/update" exact element={<UpdateStudent/>} />
          <Route path="/teachers/update" exact element={<UpdateTeacher/>} />
          <Route path="/students/add" exact element={<RegisterStudent/>} />
          <Route path="/teachers/add" exact element={<RegisterTeacher/>} />
        </Routes>
      </div>
    </Router>
  
  )
}

export default App

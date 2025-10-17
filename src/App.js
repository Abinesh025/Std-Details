import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Studentdetails from './Studentdetails'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import ViewStudent from './ViewStudent'
import Home from './Home'
// import Land from './Land'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Land />}/> */}
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Studentdetails />} />
        <Route path='/student/create' element={<CreateStudent />}/>
        <Route path='/student/edit/:studentid' element={<EditStudent />}/>
        <Route path='/student/view/:studentid' element={<ViewStudent />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
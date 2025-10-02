import React from 'react'
import "./home.css"
import clg from "./college.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="Home-cont">
        <h1>Student Details system</h1>
        <div className="img-cont">
            <img src={clg} alt="College" width={"550px"} height={"550px"}/>
        </div>
        <Link to="/student"><button className='go'> Let's Start</button></Link>
    </div>
  )
}

export default Home
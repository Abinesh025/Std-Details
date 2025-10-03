import React, { useEffect, useState } from 'react'
import "./view.css"
import { AiFillProfile } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import { BsSkipBackward } from "react-icons/bs";
const ViewStudent = () => {
  const {studentid}=useParams()
  const [viewStudent,setViewStudent]=useState({})
  useEffect(()=>{
      fetch("http://localhost:7000/studentsDetails/"+studentid).then(res=>res.json()).then(data=>setViewStudent(data)).catch(err=>err.message)
  }, [studentid])
  return (
      <div className="view-cont">
            <h1><AiFillProfile />View Student Details</h1>
            {viewStudent && 
            <div className="inner-cont">
              <table border="2px" >
                <thead>
                  <tr>
                    <th>Proofs</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Id</strong></td>
                    <td>{viewStudent.id}</td>
                  </tr>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{viewStudent.name}</td>
                  </tr>
                  <tr>
                    <td><strong>Place</strong></td>
                    <td>{viewStudent.place}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone-No</strong></td>
                    <td>{viewStudent.phone}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            }
              <Link to="/student">
                <button className="btn"><BsSkipBackward />back</button>
              </Link>
          
        </div>
  )
}

export default ViewStudent
import React, { useEffect,useState } from 'react'
import "./table.css";
import { Link, useNavigate } from 'react-router-dom';
import empty from "./no data.png"
const Studentdetails = () => {
        const [students,setStudents]=useState([])
        const navi=useNavigate()


    useEffect(()=>{
            fetch("https://jsondata-mcy3.onrender.com/studentsDetails").then(res=>res.json())
                                                          .then(data=>setStudents(data))
                                                          .catch(err=>(err.message))
    },[])
const deleteDetails = (id)=>{
   
                fetch("https://jsondata-mcy3.onrender.com/studentsDetails"+id,{
        method:"Delete"
        
    }).then(res=>window.confirm("Sure your data is deleted"),window.location.reload()).catch(err=>console.log(err.message))

}
const viewDetails = (id)=>{
    navi("/student/view/"+id)

}
const editDetails = (id)=>{
    navi("/student/edit/"+id)
}
  return (
    <div className="records-cont">
         {students.length ?
        <h1>Student Details</h1> :""}
        <Link to="/student/create"><h3>Add Students</h3></Link>
        <div className="tab-cont">
            {students.length ?
            <table >
                <thead>  
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PLACE</th>
                        <th>PHONE NUM</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                        {
                           students && students.map((std ,index)=>(
                                <tr key={index}>

                                    <td>{index+1}</td>
                                    <td>{std.name}</td>
                                    <td>{std.place}</td>
                                    <td>{std.phone}</td>
                                    <td className='btns'>
                                        <button onClick={()=>viewDetails(std.id)} className='btn-view'>View</button>
                                        <button onClick={()=>editDetails(std.id)} className='btn-edit'>Edit</button>
                                        <button onClick={()=>deleteDetails(std.id)} className='btn-del'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table> : 
            <div className="img-cont"><img src={empty} alt="no data" width={"500px"} height={"500px"}/>
            <figcaption>There is no student data is available.....</figcaption></div>

            }
        </div>
    </div>
  )
}

export default Studentdetails
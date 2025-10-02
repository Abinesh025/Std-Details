import React from 'react'
import { useState,useEffect} from 'react'  
import {  Link ,useNavigate,useParams} from 'react-router-dom'
const EditStudent = () => {
  const {studentid}=useParams()
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[place,setPlace]=useState("")
  const[phone,setPhone]=useState("")
  const navi = useNavigate()
  const [valid,setValid]=useState(false)

  useEffect(()=>{
    fetch("http://localhost:7000/studentsDetails/"+studentid).then(res=>res.json()).then(data=>{setId(data.id)
        setName(data.name)
        setPlace(data.place)
        setPhone(data.phone)})
  },[])

const handleSubmit = (e)=>{
    e.preventDefault()
    const studentData = {id,name,place,phone}
    fetch("http://localhost:7000/studentsDetails/"+studentid,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(studentData)
    }).then(res=>alert("Your Data updated SuccessFully",navi('/student')),).catch(err=>(err.message))

  }
  return (
   <div className="form-cont">
      <h2>Edit Student Details</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='id'>Id:</label>
            <input 
              type="number" 
              name='id' 
              placeholder='Enter Your Id'
              value={id}
              required
              autoComplete='off'
              onChange={(e)=>setId(e.target.value)}
              onMouseDown={()=>setValid(true)}
            />
            {id.length===0 && valid && <span>Please Enter id num</span>}
            

            <label htmlFor='name'>Name:</label>
            <input
             type='text' 
             name='name' 
             placeholder='Enter your Name'
             value={name}
             required
             onChange={(e)=>setName(e.target.value)}
             onMouseDown={()=>setValid(true)}
             autoComplete='off'
            />
            {name.length===0 && valid && <span>Please Enter your name</span>}

            <label htmlFor='place'>Place:</label>
            <input 
              type='text'
              name='place' 
              placeholder='Enter your Place'
              value={place}
              required
              onChange={(e)=>setPlace(e.target.value)}
              onClick={()=>setValid(true)}
              autoComplete='off'
            />
            {place.length===0 && valid && <span>Please Enter your Place</span>}

            <label htmlFor='phone'>Phone Num:</label>
            <input 
              type='text' 
              name='phone' 
              placeholder='Enter your Phone' 
              value={phone}
              required
              onChange={(e)=>setPhone(e.target.value)}
              onMouseDown={()=>setValid(true)}
              autoComplete='off'
            />
            {phone.length===0 && valid && <span>Please Enter your phone num</span>}

            <div className="btn-cont">
              <Link to="/student" >
                <button  type="button" className="ret">Back</button>
              </Link>
              <button type='Submit' className="save">Save</button>
            </div>
          </form>
     </div> 
  )
}

export default EditStudent
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Link } from 'react-router-dom';
function About() {
  
    
    let [info,setInfo] =React.useState({})
    let {id} =useParams()
    useEffect(()=>{
       
        axios.get("https://6657369e9f970b3b36c865b0.mockapi.io/Images/"+id)
        .then(res=>{
            setInfo(res.data)
        })
    },[])
    
  return (

    <div className='p-2 w-[100%] flex flex-col justify-center items-center '>
      <Link className=' rounded-md self-end mt-auto bg-blue-500 text-white p-1 '  to="/">Home</Link> 
     <img src={info.image} alt="" />       
    <h1 ><span className='font-bold mt-2'>name:</span> {info.name}</h1>
    <h1 ><span className='font-bold mt-2'>gender:</span> {info.gender}</h1>
    <h1 ><span className='font-bold mt-2'>status:</span> {info.status}</h1>
    <h1 ><span className='font-bold mt-2'>hair:</span> {info.hair}</h1>
    <h1 ><span className='font-bold mt-2'>origin:</span> {info.origin}</h1>
    <h1 ><span className='font-bold mt-2 '>species: </span>{info.species}</h1>

   
    </div>
    
  )
}

export default About

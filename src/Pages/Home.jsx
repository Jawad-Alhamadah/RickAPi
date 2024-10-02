import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { Navigate } from 'react-router-dom';
function Home() {

    let [people, setPeople] = React.useState([])

    useEffect(() => {
        axios.get("https://6657369e9f970b3b36c865b0.mockapi.io/Images/")
            .then(res => {
                console.log(res.data)
                setPeople(res.data)

            })
    }, [])

   
    return (
        
        <div className='flex flex-wrap p-2 gap-2 justify-center'>
            
            
            {people && people.map(p => {
                return (

                    <div key={p.id} className=' rounded shadow-lg w-[22em] flex flex-wrap p-2 bg-slate-50 '
                   
                    >
                        <div className={`bg-cover  w-[45%] `}
                         style={{backgroundImage: `url(${p.image})`}}
                        >

                        </div>
                        <div className='p-2 w-[50%] flex flex-col '>
                            <h1 ><span className='font-bold mt-2'>name:</span> {p.name}</h1>
                            <h1 ><span className='font-bold mt-2'>gender:</span> {p.gender}</h1>
                            <h1 ><span className='font-bold mt-2'>status:</span> {p.status}</h1>
                            <h1 ><span className='font-bold mt-2'>hair:</span> {p.hair}</h1>
                            <h1 ><span className='font-bold mt-2'>origin:</span> {p.origin}</h1>
                            <h1 ><span className='font-bold mt-2 '>species: </span>{p.species}</h1>

                             <Link className=' rounded-md self-end mt-auto bg-blue-500 text-white p-1 '  to={"/about/"+p.id}>Learn more</Link> 
                        </div>

                    </div>)
            })}


        </div>
    )
}

export default Home

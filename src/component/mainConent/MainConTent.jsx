import React, { useState } from 'react'
import { EditModal } from '../modal/EditModal';

export const MainConTent = ({movie,setMovie,updateMovie,el}) => {
    const [nameModal,setNameModal] = useState(false);
    


    const deletHandler =()=>{
        const del=movie.filter((movie)=>movie.id !== el.id)
        setMovie(del)
    }
    const openModal =()=>{
        setNameModal(true)
    }
    const handlerClous =()=>{
        setNameModal(false)
    }
  return (
    <div className='atasy'>
        {nameModal && (
            <EditModal handlerClous={handlerClous} updateMovie={updateMovie} el={el} />
        )}
        <div className='content'>
            <img src={el.img} alt="" />
            <h1>{el.title}</h1>
           <div className='text'>
           <h3>{el.rating}/5start</h3>
        <button className='btnDelete' onClick={deletHandler} >Delete</button>
        <button  className='btnEdit' onClick={openModal} >EDIT</button>
           </div>
        </div>
 
    </div>
  )
}

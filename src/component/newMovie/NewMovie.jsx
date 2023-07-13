import React from 'react'
import { MainConTent } from '../mainConent/MainConTent'

export const NewMovie = ({movie,setMovie,updateMovie}) => {

  return (
    <div>{movie.map((el)=>{
        return (
            <MainConTent setMovie={setMovie} updateMovie={updateMovie} movie={movie} el={el} />
        )
    })}</div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

export default function Singlemovie() {
    const {poster} = useParams()
    console.log({poster})
  return (
    <>
        <div>Singlr movie {poster}
         
        </div>
    </>
  )
}

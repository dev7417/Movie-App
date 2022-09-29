import React from 'react'
import { useParams } from 'react-router-dom'

export default function Singlemovie() {
    const {id} = useParams()
  return (
    <>
        <div>Singlr movie {id}</div>
    </>
  )
}

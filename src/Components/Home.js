import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useGlobalContext } from './Context'
import Movie from './Movie'
import Search from './Search'

export default function Home() {
    // const name = useContext(AppContext)
    // const name = useGlobalContext();
    return (
        <>
           <Search/>
           <Movie/>
        </>
    )
}

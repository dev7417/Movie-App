import React from 'react'
import { useGlobalContext } from './Context'

export default function Movie() {
    const { movie } = useGlobalContext();
    return (
        <>
            {movie.map((item) => {
                return

                <div>
                    <h2>{item.title}</h2>
                </div>
            })}
        </>
    )
}

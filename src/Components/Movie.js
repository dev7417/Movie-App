import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'
import './image.css'

export default function Movie() {
    const { movie } = useGlobalContext();
    return (
        <>
            <section className='movie-page'>
                <div className='grid grid-4-col'>
                    {movie.map((movieData) => {
                        const { url, title, poster, description } = movieData;
                        return <NavLink to={`movie/${title}`}>
                            <div className='card'>
                                <div className='card-info'>
                                    <h2>{title}</h2>
                                    {/* <p>{description}</p> */}
                                    <img src={poster} alt={description}/>
                                </div>
                            </div>
                        </NavLink>
                        
                    })}
                </div>

            </section>
        </>
    )
}

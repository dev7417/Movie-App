import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'
import './image.css'

export default function Movie() {
    const { movie } = useGlobalContext();
    return (
        <>
            <section className='movie-page'>
                <div className= ' container grid grid-4-col'>
                    {movie.map((movieData) => {
                        const { url, title, poster, description } = movieData;
                        const movieTitle = title.substring(0,15)
                        return <NavLink to={`movie/${title}`} key={movieData.title}>
                            <div className='card'>
                                <div className='card-info'>
                                    {/* <h2 className='title'> {movieTitle.length >= 25  ? `${movieTitle}...` :movieTitle}</h2> */}
                                    <h2>{movieData.title}</h2>
                                    {/* <p>{description}</p> */}
                                    <img src={poster} alt=''/>
                                </div>
                            </div>
                        </NavLink>
                        
                    })}
                </div>

            </section>
        </>
    )
}

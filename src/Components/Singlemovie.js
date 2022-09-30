import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from './Context'

export default function Singlemovie() {
  const { poster } = useParams()
  // console.log({poster})
  console.log(poster)
  const { movie, title, description } = useGlobalContext();
  return (
    <>
      {/* <div>Singlr movie {poster} </div> */}
      {movie.map((item) => {
        if (item.title === poster) {
          // return <h1>{item.title}</h1>
          const { url, title, poster, description } = item;

          const movieDesc = description.substring(0, 250);
          return <section className='movie-section'>
            <div className='movie-card'>
              <figure>
                <img src={item.poster} alt='' />
              </figure>
              <div className='card-content'>
                <p className='title'>{item.title}</p>
                  <p className='card-text-2'> {movieDesc.length >= 250 ? `${movieDesc}...` : movieDesc}</p>
                <NavLink to='/' id='btn'><button >Go Back</button></NavLink>
              </div>

            </div>
          </section>
        } else {
          console.log("nopes")
        }
      })}
    </>
  )
}

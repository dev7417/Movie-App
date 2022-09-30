import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'
import { Api_Url } from './Context';

export default function Search() {
  const { query, setQuery, error, movie, title } = useGlobalContext();
  const [search, setSearch] = useState();


  return (
    <>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div>
          <h2 className='text-center'>Search Your Favourite Movie</h2>
          <input type='text' placeholder='search here' onChange={(e) => setSearch(e.target.value)} />
        </div>
      </form>

      {movie.map((item) => {
        if (item.title === search) {
          return <>
            {/* <h1>{item.title}</h1>
            <p>{item.description}</p> */}
            <NavLink to={`movie/${item.title}`}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{item.title}</h2>
                  <img src={item.poster} />
                </div>
              </div>
            </NavLink>
          </>

        } else {
          <p>OOPS! Movie Not Found </p>
        }
      })}

      {/* // <section className='search'>
    //   <h2>Search Your Favourite  Movie</h2>
     
    //   <div className='card-error'>
    //     <p>
    //   {error.show && error.msg }
    //     </p>
    //   </div>
    // </section> */}

    </>
  )
}

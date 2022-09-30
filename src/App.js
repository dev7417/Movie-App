import React,{Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Singlemovie from './Components/Singlemovie';
import Home from './Components/Home';
import Error from './Components/Error';
const Singlemovie = React.lazy(()=> import('./Components/Singlemovie'))

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
         <Route path='/'  element={<Home/>} />
         <Route path='movie/:poster' element={<Singlemovie/>}/>
         <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;

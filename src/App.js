import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Singlemovie from './Components/Singlemovie';

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
         <Route path='/'  element={<Home/>} />
         <Route path='movie/:id' element={<Singlemovie/>}/>
         <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;

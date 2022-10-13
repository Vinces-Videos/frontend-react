//Additional react imports
import React, { useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';

//Import components
import Header from './components/Header';
import Modal from './components/Modal';
import Cart from './components/Cart';
import CartProvider from './context/cart-context'

//Import pages
import Home from './pages/Home';
import StaffArea from './pages/StaffArea';

function App() {
  const baseApiURL = "https://localhost:5001";

  //Initialise our states
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])
  const [displayModal, setOpenModal] = useState(false);

  //Load the data whenever the application is refreshed
  useEffect(() => {
      //Call the async function defined above
      (async () => await FetchItems(`${baseApiURL}/FilmCategory`, setCategories))(); //Get film categories
      (async () => await FetchItems(`${baseApiURL}/Videos`, setMovies))(); //Get movie list
  }, []);

  return (
    //This 'fragment' allows us to return multiple things
    //The modal lives above everything quietly. It only appears on demand and it's body content is changed
    //The cart persists above everything
    <>
      <CartProvider>
        {displayModal && <Modal closeModal={setOpenModal} modalBody={Cart}/>} 
        <Header modal={setOpenModal}/>
        <Routes>
            <Route path='/' element={<Home categories={categories} movies={movies}/>}/>
            <Route path='/staff' element={<StaffArea movies={movies}/>}/>
          </Routes>
      </CartProvider>
    </>
  )
}

//Should be in its own class
async function FetchItems(url, func){
  try {
    const response = await fetch(url);
    const listItems = await response.json();
    func(listItems)
  }catch(err){
    console.log(err);
  }
}

export default App;

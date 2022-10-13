import Header from './components/Header';
import VideoSections from './components/VideoSections';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react'
import Modal from './components/Modal';
import CartProvider from './context/cart-context'

function App() {
  //Global variables
  const baseApiURL = "https://localhost:5001";

  //Initialise our states
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])
  const [displayModal, setOpenModal] = useState(false);
  
  //Context can be accessed many component layers deep

  //Load the data whenever the application is refreshed
  useEffect(() => {
      //Call the async function defined above
      (async () => await FetchItems(`${baseApiURL}/FilmCategory`, setCategories))(); //Get film categories
      (async () => await FetchItems(`${baseApiURL}/Videos`, setMovies))(); //Get movie list
  }, [])

  return (
    //This 'fragment' allows us to return multiple things
    //CartProvider hands the cart to anything contained within
    <div>
      <CartProvider>
        {displayModal && <Modal closeModal={setOpenModal} modalBody={Cart}/>} 
        <div className='body-container'>
        <Header modal={setOpenModal}/>
          <VideoSections categories={categories} movies={movies}></VideoSections>
        </div>
      </CartProvider>
    </div>
  )
}

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

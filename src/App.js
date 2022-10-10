import Header from './components/Header';
import VideoSections from './components/VideoSections';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react'
import Modal from './components/Modal';

function App() {
  //Global variables
  const baseApiURL = "https://localhost:5001";

  //Initialise our states
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])
  const [loginModal, setOpenModal] = useState(false);

  //Load the data whenever 
  useEffect(() => {
      //Call the async function defined above
      (async () => await FetchItems(`${baseApiURL}/FilmCategory`, setCategories))(); //Get film categories
      (async () => await FetchItems(`${baseApiURL}/Videos`, setMovies))(); //Get movie list
  }, [])

  return (
    //This 'fragment' allows us to return multiple things
    //If openModal is set to true, open the modal
    <div>
      {loginModal && <Modal closeModal={setOpenModal} modalBody={Cart}/>} 
      <div className='body-container'>
        <Header loginModal={setOpenModal}/>
        <VideoSections categories={categories} movies={movies}></VideoSections>
      </div>
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

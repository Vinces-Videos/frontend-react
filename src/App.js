import Header from './components/Header';
import VideoSections from './components/VideoSections';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react'
import Modal from './components/Modal';

function App() {

    
  //Initially load an empty array
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])
  const [loginModal, setOpenModal] = useState(false);

  //Load the data whenever 
  useEffect(() => {
      //Call the async function defined above
      (async () => await GetCategories(setCategories))();
      (async () => await GetMovies(setMovies))();
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

async function GetCategories(func){
  const GET_CATEGORIES = "https://localhost:5001/FilmCategory"
  const response = await fetch(GET_CATEGORIES);
  const listItems = await response.json();
  console.log("got categories");
  console.log(listItems)
  func(listItems);
}

async function GetMovies(func){
  const GET_MOVIES = "https://localhost:5001/Videos"
  const response = await fetch(GET_MOVIES);
  const listItems = await response.json();
  console.log("got movies");
  console.log(listItems)
  func(listItems);
}

export default App;

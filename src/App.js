import Header from './components/Header';
import FilmCategories from './components/FilmCategories';
import { useState, useEffect } from 'react'
import Modal from './components/Modal';

function App() {
  const API_URL = "https://localhost:5001/FilmCategory"
    
  //Initially load an empty array
  const [categories, setCategories] = useState([])
  const [show, setShow] = useState(false);

  //Load the data whenever 
  useEffect(() => {
      //Use an async function
      const fetchItems = async () => {
          try {
              const response = await fetch(API_URL);
              const listItems = await response.json();
              console.log(listItems)
              setCategories(listItems);
          } catch (err) {
              console.log(err.stack);
          }
      }

      //Call the async function defined above
      (async () => await fetchItems())();
  }, [])

  return (
    //This 'fragment' allows us to return multiple things
    <div>
      <Header title='<Branding>'/>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <Modal Show={show}/>
      <FilmCategories categories={categories}></FilmCategories>
    </div>
  )
}

export default App;

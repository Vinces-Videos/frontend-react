import Movies from './Movies';
import { useEffect, useState } from 'react'

export const FilmCategories = ({categories}) => {
    const API_URL = "https://localhost:5001/videos"
    
    //Initially load an empty array
    const [movies, setMovies] = useState([])

    //Load the data whenever 
    useEffect(() => {
        //Use an async function
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                const listItems = await response.json();
                console.log(listItems)
                setMovies(listItems);
            } catch (err) {
                console.log(err.stack);
            }
        }

        //Call the async function defined above
        (async () => await fetchItems())();
    }, [])

    return (
    <>
        {categories.map((cat) => (
            <div key={cat.id} className='categories-outer-container'>
                <p>{cat.name}</p>
                <Movies category={cat.name} movies={movies}></Movies>
            </div>
        ))}
    </>
    )
}

export default FilmCategories;

import Header from './components/Header';
import Movies from './components/Movies';
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([
    {
      "durationMinutes": 123,
      "ageRating": "18",
      "category": "Regular",
      "name": "My First Video",
      "stockCount": 42,
      "thumbnailUrl": "https://mcoffey-2020-v1.s3.eu-west-2.amazonaws.com/film-thumbnails/test-thumbnail-oblivion.jpg",
      "tags": {
        "Main Actor": "Tom Cruise"
      },
      "id": "6304c30d03377729f9f5528d",
      "archived": true
    },
    {
      "durationMinutes": 141,
      "ageRating": "12",
      "category": "New Releases",
      "name": "Star Wars: A New Hope",
      "stockCount": 3,
      "thumbnailUrl": "https://mcoffey-2020-v1.s3.eu-west-2.amazonaws.com/film-thumbnails/test-thumbnail-lodr.jpg",
      "tags": {
        "Main Actor": "Mark Hamill",
        "Supporting Actor": "Harrison Ford"
      },
      "id": "6304c3d503377729f9f55290",
      "archived": true
    }
]);

  return (
    //This 'fragment' allows us to return multiple things
    <div>
      <Header title='Vinces Videos'/>
      <div className='container'>
        <Movies category="New Releases" movies={movies}/>
      </div>
    </div>
  )
}

export default App;

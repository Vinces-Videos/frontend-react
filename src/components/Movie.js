import { useCartUpdate } from "../context/cart-context";

const Movie = ( { movie } ) => {
  //Bring a cart context to movie to allow us to execute cart functions
  const updateCart = useCartUpdate();

  return (
    <div className="video-container" style={{cursor: 'pointer'}}>
        <div className="video-thumbnail-div" style={{backgroundImage: `url(${movie.thumbnailUrl})`}} />
        <h4 className="movie-title" key={movie.id}>{movie.name}</h4>
        <p>Rated {movie.ageRating}</p>
        <p>Runtime: {movie.durationMinutes} minutes</p>
        <button onClick={() => {updateCart(movie)}}>Add to cart</button>
    </div>
  )
}

export default Movie

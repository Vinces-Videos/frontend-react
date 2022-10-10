const Movie = ( { movie } ) => {
  return (
    <div className="video-container" style={{cursor: 'pointer'}}>
        <div className="video-thumbnail-div" style={{backgroundImage: `url(${movie.thumbnailUrl})`}} />
        <h4 key={movie.id}>{movie.name}</h4>
        <p>Rated {movie.ageRating}</p>
        <p>Runtime: {movie.durationMinutes} minutes</p>
    </div>
  )
}

export default Movie

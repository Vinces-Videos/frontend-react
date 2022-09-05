export const Movie = ( { movie } ) => {
  return (
    <div className="video-container" style={{cursor: 'pointer'}}>
        <img className='video-thumbnail' src={movie.thumbnailUrl} alt='Not found'/>
        <h3 key={movie.id}>{movie.name}</h3>
    </div>
  )
}

export default Movie

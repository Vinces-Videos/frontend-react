import Movie from './Movie'

const Movies = ({category, movies, includeArchived = false}) => {
  const filteredMovies = movies.filter(movie => movie.category === category && movie.archived === includeArchived);
  
  return (
    <div className= 'categories-inner-container'>
        {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
        ))}
    </div>
  )
}

export default Movies

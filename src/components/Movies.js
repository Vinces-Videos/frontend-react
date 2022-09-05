import Movie from './Movie'

const Movies = ({category},{movies}) => {
  return (
    <>
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
        ))}
    </>
  )
}

export default Movies

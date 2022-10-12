import Movies from './Movies';

export const VideoSections = ({categories, movies}) => {
    return (
    <>
        {
        categories.map((cat) => (
            <div key={cat.id} className='categories-outer-container'>
                <p>{cat.name}</p>
                <Movies category={cat.name} movies={movies}></Movies>
            </div>
        ))
        }
    </>
    )
}

export default VideoSections;

import VideoSections from '../components/VideoSections';

export default function Home({categories, movies}){
    return (
        <div className='body-container'>
            <VideoSections categories={categories} movies={movies}></VideoSections>
        </div>
    )
}
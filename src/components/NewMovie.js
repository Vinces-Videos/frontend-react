import { useRef } from "react";
//Import the API functions to make the put call
const Api = require('../Api');

const NewMovie = ({displayForm}) => {
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const ageRef = useRef(null);
    const archivedRef = useRef(null);
    const durationRef = useRef(null);
    const stockRef = useRef(null);
    const thumbRef = useRef(null);

    return (
        <div className='movie-form'>
            <h5>New Movie Form</h5>
            <label>Title:
                <input ref={titleRef} className='medium-input' type='textbox'/>
            </label>
            <label>Category:
                <select ref={categoryRef}>
                    <option>A</option>
                </select>
            </label>
            <label>Age Rating:
                <select ref={ageRef}>
                    <option value='all'>U - Suitable for all</option>
                    <option value='pg'>PG - Parental guidance</option>
                    <option value='12'>12 - Age 12 and above</option>
                    <option value='15'>15 - Age 15 and above</option>
                    <option value='18'>18 - Age 18 and above</option>
                </select>
            </label>
            <label>Archived:
                <input ref={archivedRef} type='checkbox'/>
            </label>
            <label>Duration (minutes):
                <input ref={durationRef} type='number' min='1' max='900'/>
            </label>
            <label>Stock Count:
                <input ref={stockRef} type='number' min='0' max='900'/>
            </label>
            <label>Thumbnail URL:
                <input ref={thumbRef} className='long-input' type='textbox'/>
            </label>
            <button onClick={() => postVideo()}>Submit</button>
            <button onClick={() => displayForm(false)}>Cancel</button>
        </div>
    )

    function postVideo(){
        const movie = {
            name: titleRef.current.value,
            category: categoryRef.current.value,
            ageRating: ageRef.current.value,
            archived: archivedRef.current.checked,
            durationMinutes: durationRef.current.value,
            stockCount: stockRef.current.value,
            thumbnailUrl: thumbRef.current.value
        }

        if (Object.values(movie).every(element => element !== 'undefined' && element !== '')){
            Api.Post('foo', movie);
        }else{
            console.warn('null object contained within! reject');
        }

        console.log(movie);
    }
}

export default NewMovie;
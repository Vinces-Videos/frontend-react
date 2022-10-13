const NewMovie = ({displayForm}) => {
    return (
        <div className='movie-form'>
            <h5>New Movie Form</h5>
            <label>Title:
                <input className='medium-input' type='textbox'/>
            </label>
            <label>Category:
                <select>
                    <option>A</option>
                </select>
            </label>
            <label>Age Rating:
                <select>
                    <option value='all'>U - Suitable for all</option>
                    <option value='pg'>PG - Parental guidance</option>
                    <option value='12'>12 - Age 12 and above</option>
                    <option value='15'>15 - Age 15 and above</option>
                    <option value='18'>18 - Age 18 and above</option>
                </select>
            </label>
            <label>Archived:
                <input type='checkbox'/>
            </label>
            <label>Duration (minutes):
                <input type='number' min='1' max='900'/>
            </label>
            <label>Stock Count:
                <input type='number' min='0' max='900'/>
            </label>
            <label>Thumbnail URL:
                <input className='long-input' type='textbox'/>
            </label>
            <button onClick={(event) => postVideo(event.target.parentNode)}>Submit</button>
            <button onClick={() => displayForm(false)}>Cancel</button>
        </div>
    )
}

function postVideo(component){
    console.log(component);
}

export default NewMovie;
//Imports
import { useState } from 'react';

//Components=
import NewMovie from '../components/NewMovie'

//CSS
import '../styles/StaffArea.css'

//Requires
const Api = require ('../Api');

export default function StaffArea({movies}){
    const [newMovieState, setNewMovieState] = useState(false);
    
    return (
        <div className ='grid-container'>
            <div className='staff-nav'>
                <p>navigation panel for staff area, current view is movies</p>
            </div>
            <div className='body-container'>
                <p>You are in a restricted area. There should have been some form of authentication to prevent this!</p>
                <button onClick={() => setNewMovieState(true)}>New</button>
                {newMovieState && <NewMovie displayForm={setNewMovieState}/>}
                <button onClick={() => deleteSelected()}>Delete Selected</button>
                <label>Edit Mode</label>
                <input type='checkbox'></input>
                <table>
                    <thead>
                        <tr className="table-header">
                            <th>-</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Age Rating</th>
                            <th>Archived</th>
                            <th>Duration (minutes)</th>
                            <th>Stock Count</th>
                            <th>Thumbnail URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(element => {
                            //The key property is just for React, we need to assign our own accessible key to be able to identify the record.
                            return (
                                <tr key={element.id}>
                                    <td>
                                        <input data-key={element.id} className='toDelete' type='checkbox'></input>
                                    </td>
                                    <td>{element.name}</td>
                                    <td>{element.category}</td>
                                    <td>{element.ageRating}</td>
                                    <td>
                                        <input type='checkbox' disabled={true} defaultChecked={element.archived} ></input>
                                    </td>
                                    <td>{element.durationMinutes}</td>
                                    <td>{element.stockCount}</td>
                                    <td>{element.thumbnailUrl}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )


    //Use query selector to get the attribute from ticked to delete rows
    function deleteSelected(){
        const deleteElements = document.querySelectorAll('input[type=checkbox]:checked.toDelete');
        //Convert to an array and drop all unnecessary additional properties
        const deleteKeys = [...deleteElements].map(htmlElement => htmlElement.getAttribute('data-key'));
        console.log('Keys to delete are', deleteKeys);
        //Ensure the user that they want to do this, multiple rows will be deleted!
        if (deleteKeys.length > 0)
            if (window.confirm(`Are you sure you want to delete ${deleteKeys.length} records`))
            {
                //API only currently supports deleting one key at a time
                deleteKeys.forEach(key => Api.Delete(process.env.REACT_APP_productsEndpoint, key, (result) => {
                    console.log(result);
                    //This is messy, shouldn't require a whole page refresh
                    window.location.reload();
                }));

                //proceed with delete
                console.log('deleting');
            }
    }
}
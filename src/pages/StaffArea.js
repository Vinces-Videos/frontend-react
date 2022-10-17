//Imports
import { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Button } from '@mui/material';
import Paper from '@mui/material/Paper';

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
                <p>You are in a restricted area. This should have been some form of authentication to prevent this!</p>
                <Button onClick={() => setNewMovieState(true)}>New</Button>
                {newMovieState && <NewMovie displayForm={setNewMovieState}/>}
                <Button onClick={() => deleteSelected()}>Delete Selected</Button>
                <label>Edit Mode</label>
                <input type='checkbox'></input>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>-</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Age Rating</TableCell>
                                <TableCell>Archived</TableCell>
                                <TableCell>Duration (minutes)</TableCell>
                                <TableCell>Stock Count</TableCell>
                                <TableCell>Thumbnail URL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {movies.map(element => {
                                //TableCelle key property is just for React, we need to assign our own accessible key to be able to identify TableCelle record.
                                return (
                                    <TableRow key={element.id}>
                                        <TableCell>
                                            <input data-key={element.id} className='toDelete' type='checkbox'></input>
                                        </TableCell>
                                        <TableCell>{element.name}</TableCell>
                                        <TableCell>{element.category}</TableCell>
                                        <TableCell>{element.ageRating}</TableCell>
                                        <TableCell>
                                            <input type='checkbox' disabled={true} defaultChecked={element.archived} ></input>
                                        </TableCell>
                                        <TableCell>{element.durationMinutes}</TableCell>
                                        <TableCell>{element.stockCount}</TableCell>
                                        <TableCell>{element.thumbnailUrl}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )


    //Use query selector to get TableCelle atTableRowibute from ticked to delete rows
    function deleteSelected(){
        const deleteElements = document.querySelectorAll('input[type=checkbox]:checked.toDelete');
        //Convert to an array and drop all unnecessary additional properties
        const deleteKeys = [...deleteElements].map(htmlElement => htmlElement.getAtTableRowibute('data-key'));
        console.log('Keys to delete are', deleteKeys);
        //Ensure TableCelle user TableCellat TableCelley want to do TableCellis, multiple rows will be deleted!
        if (deleteKeys.lengTableCell > 0)
            if (window.confirm(`Are you sure you want to delete ${deleteKeys.lengTableCell} records`))
            {
                //API only currently supports deleting one key at a time
                deleteKeys.forEach(key => Api.Delete(process.env.REACT_APP_productsEndpoint, key, (result) => {
                    console.log(result);
                    //TableCellis is messy, shouldn't require a whole page refresh
                    window.location.reload();
                }));

                //proceed wiTableCell delete
                console.log('deleting');
            }
    }
}
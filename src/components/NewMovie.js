import { useRef } from "react";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        <Box component='form' noValidate autoComplete='off'>
            <TextField ref={titleRef} required id='outlined-required' label="Title">
                <input ref={titleRef} className='medium-input' type='textbox'/>
            </TextField>
            <Select ref={categoryRef} label='Category'>
                <MenuItem>New Releases</MenuItem>
                <MenuItem>Regular</MenuItem>
                <MenuItem>Childrens</MenuItem>
            </Select>
            <Select ref={ageRef} label='Age Rating'>
                <MenuItem value='all'>U - Suitable for all</MenuItem>
                <MenuItem value='pg'>PG - Parental guidance</MenuItem>
                <MenuItem value='12'>12 - Age 12 and above</MenuItem>
                <MenuItem value='15'>15 - Age 15 and above</MenuItem>
                <MenuItem value='18'>18 - Age 18 and above</MenuItem>
            </Select>
            <FormGroup>
                <FormControlLabel ref={archivedRef} control={<Switch/>} label="Archived" />
            </FormGroup>
            <label>Duration (minutes):
                <input ref={durationRef} type='number' min='1' max='900'/>
            </label>
            <label>Stock Count:
                <input ref={stockRef} type='number' min='0' max='900'/>
            </label>
            <label>Thumbnail URL:
                <input ref={thumbRef} className='long-input' type='textbox'/>
            </label>
            <Button onClick={() => postVideo()}>Submit</Button>
            <Button onClick={() => displayForm(false)}>Cancel</Button>
        </Box>
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

        //If all of the required parameters have been fulfilled, submit to the API and await a response.
        if (Object.values(movie).every(element => element !== 'undefined' && element !== '')){
            const videosEndpoint = process.env.REACT_APP_videosEndpoint;
            Api.Put(videosEndpoint, movie, (res) => {
                console.log(res);
                //This is messy, shouldn't require a whole page refresh
                window.location.reload();
            });
        }else{
            console.warn('null object contained within! reject');
        }

        console.log(movie);
    }   
}

export default NewMovie;
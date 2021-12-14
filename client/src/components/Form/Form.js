import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const Form = () => {

    const [title,setTitle]=useState('');
    const [clue,setClue]=useState('');
  
    async function SubmitForm(event)
    {
        console.log('form submitted');
        console.log(title);
        console.log(clue);
        

        try {
            await axios.post("http://localhost:5000/CreateForm",{
                title,clue
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <form action='post' noValidate autoComplete="off">
 <Grid item xs={12} sm={6} md={3}><TextField id="standard-basic" label="title" value={title} onChange={(e) => setTitle(e.target.value)} /></Grid> 
 
  <TextField
          id="standard-full-width"
        
          style={{ margin: 8 }}
          placeholder="Clue and answer"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={clue}
          onChange={(e) => setClue(e.target.value)}
        />
  <button type='submit' onClick={SubmitForm}>submit</button>
</form>
    );
}
export default Form;
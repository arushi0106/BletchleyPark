import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form.js' 
// import useStyles from './styles.js';

const App = () => {
    // const classes = useStyles();
    return(
       <Container >
<AppBar>
    <Typography variant='H2' align="center">Crossword</Typography>
</AppBar>
<br></br>
<Form></Form>
       </Container>
    );
}

export default App;
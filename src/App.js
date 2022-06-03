import { useState } from 'react';
import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';
import {scaleData} from './Scales.js'
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


function App() {

const [loadedScales, setLoadedScales] = useState(scaleData);
const [selectedNotes, setSelectedNotes] = useState([])

// start with all scales 
let filteredScaleData = loadedScales;

// the filtering mechanism, iterates over the array of selected notes
// and filters down for each one
let count = 0;
selectedNotes.forEach(element => {
filteredScaleData = filteredScaleData.filter(stuff => {
  return stuff.notes.includes(selectedNotes[count]);
})
count = count +1;
});

// the app!
  return ( 
    <Container maxWidth="md">
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h5" component="h3">
           Jam Utility: Filter Scales by Notes. 
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Checkboxes setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes}/>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Results data={filteredScaleData} />
       </Grid>
      </Grid>
    </Container>
  );
}



export default App;


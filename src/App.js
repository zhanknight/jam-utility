import { useState } from 'react';
import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';
import {scaleData} from './Scales.js'

function App() {

const [loadedScales, setLoadedScales] = useState(scaleData);

// const filteredScaleData = loadedScales.filter(stuff => {
// return stuff.notes.includes('A');})

// the scaleData in state will eventually get manipulated by the checkboxes
// setting display value to true or false, then we'll filter for true items
// and send those down to the results component. 
const filteredScaleData = loadedScales.filter(displaycheck => {
return displaycheck.display === true;})


  return (
    <div className="App">
    <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <Checkboxes />
    </div>
    <Results data={filteredScaleData} />
    </div>
  );
}

export default App;






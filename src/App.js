import { useState } from 'react';
import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';
import {scaleData} from './Scales.js'

function App() {

const [loadedScales, setLoadedScales] = useState(scaleData);
const [selectedNotes, setSelectedNotes] = useState(["C", "D", "F"])

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

console.log(selectedNotes);

// the app!
  return (
    <div className="App">
     {selectedNotes}
    <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <Checkboxes sSelectedNotes={setSelectedNotes}/>
    </div>
    <Results data={filteredScaleData} />
    </div>
  );
}



export default App;

